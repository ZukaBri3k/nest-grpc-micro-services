import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app/app.module';
import { USER_PACKAGE_NAME } from '@test-ms-grpc/grpc-ts-types';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:9001',
      package: USER_PACKAGE_NAME,
      protoPath: join(__dirname, 'libs/proto-files/user.proto'),
    },
  });

  await app.listen();
  Logger.log(`🚀 Microservice is running on port 9001`);
}

bootstrap();
