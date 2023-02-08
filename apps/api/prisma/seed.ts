/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import * as a from '../src/modules/user/user.service';

const { UserService } = a;

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  console.log('💫 seed executing ...');

  const prismaService = new PrismaService();
  const usersService = new UserService(prismaService);

  // add admin user
  await usersService.create({
    data: {
      email: 'manager@asdf.com',
      name: 'manager',
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

  // add user role
  const userRole = await prismaService.role.create({
    data: {
      name: 'user',
    },
  });

  // add 5 users
  const createUsersPromises = [1, 2, 3, 4, 5]
    .map(i => {
      return {
        email: `user${i}@asdf.com`,
        name: `user${i}`,
        password: 'Ab123456',
        emailConfirmedAt: new Date(),
        confirmationCode: `confirmationCode${i}`,
        role: {
          connect: {
            id: userRole.id,
          },
        },
      };
    })
    .map(async data => {
      return new Promise(resolve => {
        usersService
          .create({
            data,
          })
          .then(value => {
            resolve(value);
          });
      });
    });
  await Promise.all(createUsersPromises);
  console.log('💫 seed finished.');
};

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
