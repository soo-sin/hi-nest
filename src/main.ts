import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //보낸 걸 실제 타입으로 바꿔주는 옵션
    }),
  ); //pipe : 미들웨어와 비슷

  await app.listen(3000);
}

bootstrap();
