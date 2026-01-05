import { Body, Controller, Delete, Get, Inject, OnModuleInit, Param, Patch, Post } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { USER_PACKAGE_NAME, USER_SERVICE_NAME, UserServiceClient } from '@test-ms-grpc/grpc-ts-types';
import type { CreateUserRequest, UpdateUserRequest } from '@test-ms-grpc/grpc-ts-types';

@Controller('user')
export class UserController implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject(USER_PACKAGE_NAME) private readonly user: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.user.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById({ id: +id });
  }

  @Post()
  create(@Body() user: CreateUserRequest) {
    return this.userService.createUser(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserRequest) {
    return this.userService.updateUser({ id: +id, name: user.name, email: user.email });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser({ id: +id });
  }
}
