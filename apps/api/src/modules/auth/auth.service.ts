import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Permission, Role, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { MailService } from '../mail/mail.service';
import { UsersService } from '../users/users.service';
import { AuthConfirmationCodeDoesNotExist } from './auth.error';
import { AuthInvalidPasssword } from './auth.errors';
import { UserChangePasswordInput } from './dto/user-change-password.input';
import { UserSignInResponse } from './dto/user-sign-in.response';
import { UserSignUpInput } from './dto/user-sign-up.input';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private mailService: MailService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findUnique({
      where: { email },
      include: {
        permissions: true,
        role: {
          include: {
            permissions: true,
          },
        },
      },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return null;
  }

  async signUpUser(userSignUpInput: UserSignUpInput): Promise<boolean> {
    this.validateUserPassword(userSignUpInput.password);
    const confirmationCode = uuidv4();
    const user = await this.usersService.create({
      data: {
        email: userSignUpInput.email,
        password: userSignUpInput.password,
        confirmationCode,
      },
    });
    const redirectHost = this.configService.get<string>('MAIL_REDIRECT_HOST') || 'localhost';
    // send confirmation mail
    await this.mailService.sendUserEmailConfirmation({
      email: user.email,
      confirmationCode,
      redirectHost,
    });
    return !!user;
  }

  async changePassword(user: User, data: UserChangePasswordInput): Promise<boolean> {
    this.validateUserPassword(data.newPassword);
    await this.usersService.update({
      where: {
        id: user.id,
      },
      data: {
        password: data.newPassword,
      },
    });

    return !!user;
  }

  async confirmUserEmail(token: string): Promise<boolean> {
    const user = await this.usersService.findUnique({
      where: { confirmationCode: token },
    });
    if (!user) {
      throw new AuthConfirmationCodeDoesNotExist();
    }
    if (!user.emailConfirmedAt) {
      await this.usersService.update({
        where: {
          id: user.id,
        },
        data: {
          emailConfirmedAt: new Date(),
        },
      });
    }
    return true;
  }

  async signInUser(
    user: User & {
      permissions: Permission[];
      role: Role & {
        permissions: Permission[];
      };
    },
  ): Promise<UserSignInResponse> {
    const payload: JwtPayload = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-permissions': `{${[...user.role.permissions, ...user.permissions]
          .map(permission => `${permission.tableName}:${permission.operation}`)
          .join(',')}}`,
        'x-hasura-allowed-roles': ['admin', 'user'],
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': user.id.toString(),
        'x-hasura-role': 'user',
      },
      sub: user.id.toString(),
      iat: Date.now() / 1000,
    };

    return {
      jwtToken: this.jwtService.sign(payload, {
        expiresIn: '30d', // 30日間
      }),
    };
  }

  private validateUserPassword(password: string): void {
    const passwordRegex = /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new AuthInvalidPasssword();
    }
  }
}
