import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { AcceptLanguageResolver, HeaderResolver, I18nModule } from 'nestjs-i18n';
// import { LoggerModule } from 'nestjs-pino';
import { PrismaModule } from 'nestjs-prisma';
import { RequestContextModule } from 'nestjs-request-context';
import * as path from 'path';

import { AppResolver } from './app.resolver';
import { validationSchemaForEnv } from './config/environment-variables';
import { ContextInterceptor } from './libs/application/context/ContextInterceptor';
import { ExceptionInterceptor } from './libs/application/interceptors/exception.interceptor';
import { AuthModule } from './modules/auth/auth.module';
import { MailModule } from './modules/mail/mail.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RoleModule } from './modules/role/role.module';
import { UserModule } from './modules/user/user.module';

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ExceptionInterceptor,
  },
];
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationSchemaForEnv,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      autoSchemaFile: './graphql/schema.gql',
      sortSchema: true,
      introspection: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      fallbacks: {
        'ja-*': 'ja',
        'en-*': 'en',
      },
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: HeaderResolver, options: ['locale'] }, AcceptLanguageResolver],
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    // LoggerModule.forRoot({
    //   // TODO: 本番環境ではSessionTokenを標準出力に出さないようにする。
    //   pinoHttp: {
    //     level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
    //     transport: process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
    //   },
    // }),
    AuthModule,
    UserModule,
    RequestContextModule,
    MailModule,
    PermissionModule,
    RoleModule,
  ],
  controllers: [],
  providers: [AppResolver, ...interceptors],
})
export class AppModule {}
