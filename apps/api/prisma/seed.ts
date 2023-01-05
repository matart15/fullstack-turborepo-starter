/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import * as a from '../src/modules/users/users.service';

console.log('a: ', a);
const { UsersService } = a;

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  console.log('💫 seed executing ...');

  const prismaService = new PrismaService();
  const usersService = new UsersService(prismaService);

  // ユーザー追加
  await usersService.create({
    data: {
      email: 'manger@asdf.com',
      password: 'asdfasdf',
      emailConfirmedAt: new Date(),
      confirmationCode: '123',
    },
  });

  await usersService.create({
    data: {
      email: 'user@asdf.com',
      password: 'asdfasdf',
      emailConfirmedAt: new Date(),
      confirmationCode: '456',
    },
  });
  console.log('💫 seed finished.');
};

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
