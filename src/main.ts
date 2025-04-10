import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  app.enableCors({
    origin: process.env.FRONTEND_URL, //URL DEL FRONT
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
  });

}

bootstrap();
