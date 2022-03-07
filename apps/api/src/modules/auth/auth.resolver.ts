import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as client from '@prisma/client';

import { AuthInvalidPasssword } from './auth.errors';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { CurrentUserResponse } from './dto/current-user.response';
import { UserChangePasswordInput } from './dto/user-change-password.input';
import { UserSignInInput } from './dto/user-sign-in.input';
import { UserSignInResponse } from './dto/user-sign-in.response';
import { UserSignUpInput } from './dto/user-sign-up.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => CurrentUserResponse, { name: 'currentUser' })
  @UseGuards(JwtAuthGuard)
  getCurrentUser(@CurrentUser() user: client.User): client.User {
    return user;
  }

  @Mutation(() => Boolean)
  confirmUserEmail(@Args('token') token: string): Promise<boolean> {
    return this.authService.confirmUserEmail(token);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  changePassword(@CurrentUser() user: client.User, @Args('data') data: UserChangePasswordInput): Promise<boolean> {
    return this.authService.changePassword(user, data);
  }

  @Mutation(() => Boolean)
  signUpUser(@Args('data') userSignUpInput: UserSignUpInput): Promise<boolean> {
    const passwordRegex = /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(userSignUpInput.password)) {
      throw new AuthInvalidPasssword();
    }
    return this.authService.signUpUser(userSignUpInput);
  }

  @Mutation(() => UserSignInResponse)
  @UseGuards(GqlAuthGuard)
  signInUser(
    @Args('data') _userSignInInput: UserSignInInput,
    @Context() context: { user: client.User },
  ): Promise<UserSignInResponse> {
    return this.authService.signInUser(context.user);
  }
}
