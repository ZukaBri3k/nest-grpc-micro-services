# Post Microservice (`post-ms`)

The **Post Microservice** is a backend service responsible for managing **Posts**. It provides a gRPC interface that is primarily consumed by the `api-gateway`.

## Responsibilities

- **CRUD Operations**: Create, Read, Update, and Delete blog posts.
- **Data Persistence**: Connects to the database to store post data (implementation details depend on the service setup).

## gRPC Interface

This service implements the `PostService` defined in `libs/proto-files/src/post.proto`.

### Methods Implemented

- `GetAllPosts`
- `GetPostById`
- `CreatePost`
- `UpdatePost`
- `DeletePost`
