import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { environment } from 'constants/environment';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const config = app.get(ConfigService);
  const PORT = config.getOrThrow<number>(environment.port);

  await app.listen(PORT);
}

bootstrap();
