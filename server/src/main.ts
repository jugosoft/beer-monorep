import { NestFactory, Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { environment } from 'constants/environment';
import { AppModule } from './app.module';
import { AtGuard } from './modules/auth/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // app.enableCors({
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });

  const config = app.get(ConfigService);
  const PORT = config.getOrThrow<number>(environment.port);
  
  const reflector: Reflector = new Reflector();
  // app.useGlobalGuards(new AtGuard(reflector));

  await app.listen(PORT);
}

bootstrap();
