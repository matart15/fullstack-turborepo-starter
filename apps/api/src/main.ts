/* eslint-disable import/no-import-module-exports */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

// eslint-disable-next-line @next/next/no-assign-module-variable, @typescript-eslint/no-explicit-any
declare const module: any;
const bootstrap = async (): Promise<void> => {
  const logger = new Logger('EntryPoint');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Leaves Tracker')
    .setDescription('Api Docs for leaves tracker')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = 5000;

  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  logger.log(`Server running on http://localhost:${PORT}`);
};
bootstrap();
