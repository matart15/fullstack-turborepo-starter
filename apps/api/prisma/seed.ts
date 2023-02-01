/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import * as a from '../src/modules/user/user.service';

console.log('a: ', a);
const { UserService } = a;

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  console.log('💫 seed executing ...');

  const prismaService = new PrismaService();
  const usersService = new UserService(prismaService);

  // ユーザー追加
  await usersService.create({
    data: {
      email: 'manager@asdf.com',
      password: 'Ab123456',
      emailConfirmedAt: new Date(),
      confirmationCode: '123',
      role: {
        create: {
          name: 'manager',
        },
      },
    },
  });

  await usersService.create({
    data: {
      email: 'user@asdf.com',
      password: 'Ab123456',
      emailConfirmedAt: new Date(),
      confirmationCode: '456',
      role: {
        create: {
          name: 'user',
        },
      },
    },
  });
  console.log('💫 seed finished.');
};

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
