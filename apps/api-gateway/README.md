# API Gateway

The **API Gateway** is the entry point for external clients to interact with the system. It exposes a RESTful API and forwards requests to the underlying gRPC microservices (`user-ms` and `post-ms`).

## Features

- **Protocol Translation**: Converts incoming HTTP/JSON requests into gRPC calls.
- **Unified API**: Aggregates functionality from multiple microservices into a single API surface.

## Endpoints

### Post Controller (`/post`)

| Method   | Path        | Description       |
| :------- | :---------- | :---------------- |
| `GET`    | `/post`     | Get all posts     |
| `GET`    | `/post/:id` | Get a post by ID  |
| `POST`   | `/post`     | Create a new post |
| `PATCH`  | `/post/:id` | Update a post     |
| `DELETE` | `/post/:id` | Delete a post     |

### User Controller (`/user`)

| Method   | Path        | Description       |
| :------- | :---------- | :---------------- |
| `GET`    | `/user`     | Get all users     |
| `GET`    | `/user/:id` | Get a user by ID  |
| `POST`   | `/user`     | Create a new user |
| `PATCH`  | `/user/:id` | Update a user     |
| `DELETE` | `/user/:id` | Delete a user     |

## Configuration

This application uses clients generated from `grpc-ts-types` to communicate with:

- **User Service** (via `UserServiceClient`)
- **Post Service** (via `PostServiceClient`)
