import { NestFactory } from '@nestjs/core';
import * as config from 'config';

import { environment } from 'constants/environment';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get(environment.port));
}

bootstrap();
