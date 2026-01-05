import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME } from '@test-ms-grpc/grpc-ts-types';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: USER_PACKAGE_NAME,
          protoPath: join(__dirname, 'libs/proto-files/user.proto'),
          url: '0.0.0.0:9001',
        },
      }
    ])
  ],
  controllers: [UserController],
})
export class UserModule {}
