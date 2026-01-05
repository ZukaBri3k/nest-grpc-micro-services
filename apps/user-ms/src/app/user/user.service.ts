import { Injectable, NotFoundException } from '@nestjs/common';
import { User, Users } from '@test-ms-grpc/grpc-ts-types';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    },
  ];

  getAllUsers(): Users {
    return {
      users: this.users,
    };
  }

  getUserById(id: number): User {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  updateUser(user: User): User {
    const index = this.users.findIndex((user) => user.id === user.id);

    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    this.users[index] = user;
    return user;
  }

  deleteUser(id: number): User {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    return this.users.splice(index, 1)[0];
  }
}
