import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { POST_PACKAGE_NAME } from '@test-ms-grpc/grpc-ts-types';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: POST_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:9000',
          package: POST_PACKAGE_NAME,
          protoPath: join(__dirname, 'libs/proto-files/post.proto'),
        },
      },
    ]),
  ],
  controllers: [PostController],
})
export class PostModule {}
