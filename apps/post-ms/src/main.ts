import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app/app.module';
import { POST_PACKAGE_NAME } from '@test-ms-grpc/grpc-ts-types';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:9000',
      package: POST_PACKAGE_NAME,
      protoPath: join(__dirname, 'libs/proto-files/post.proto'),
    },
  });

  await app.listen();
  Logger.log(`🚀 Microservice is running on port 9000`);
}

bootstrap();
