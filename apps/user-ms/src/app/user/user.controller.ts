import { Controller } from '@nestjs/common';
import { CreateUserRequest, EmptyUserRequest, UpdateUserRequest, User, UserIdRequest, UserServiceController, UserServiceControllerMethods, Users } from '@test-ms-grpc/grpc-ts-types';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Controller('user')
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  getAllUsers(_: EmptyUserRequest): Promise<Users> | Observable<Users> | Users {
    return this.userService.getAllUsers();
  }

  getUserById(request: UserIdRequest): Promise<User> | Observable<User> | User {
    return this.userService.getUserById(request.id);
  }

  createUser(request: CreateUserRequest): Promise<User> | Observable<User> | User {
    return this.userService.createUser(request);
  }

  updateUser(request: UpdateUserRequest): Promise<User> | Observable<User> | User {
    return this.userService.updateUser(request);
  }

  deleteUser(request: UserIdRequest): Promise<User> | Observable<User> | User {
    return this.userService.deleteUser(request.id);
  }
}
