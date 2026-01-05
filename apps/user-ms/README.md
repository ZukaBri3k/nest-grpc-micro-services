# User Microservice (`user-ms`)

The **User Microservice** is a backend service responsible for managing **Users**. It provides a gRPC interface that is primarily consumed by the `api-gateway`.

## Responsibilities

- **CRUD Operations**: Create, Read, Update, and Delete users.
- **Data Persistence**: Connects to the database to store user data.

## gRPC Interface

This service implements the `UserService` defined in `libs/proto-files/src/user.proto`.

### Methods Implemented

- `GetAllUsers`
- `GetUserById`
- `CreateUser`
- `UpdateUser`
- `DeleteUser`
