import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // app.enableCors({
    //   origin: true,
    //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    //   credentials: true,
    // });

    const PORT: number = process.env.API_PORT as unknown as number || 3001;

    await app.listen(PORT);
}

bootstrap();
