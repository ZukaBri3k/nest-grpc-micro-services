# NestJS gRPC Monorepo

This project is a Monorepo managed with **Nx**, demonstrating a microservices architecture using **NestJS** and **gRPC**.

## Project Structure

The project follows a standard Nx workspace structure with applications and libraries.

### Applications (`/apps`)

- **api-gateway**: An HTTP Gateway that exposes RESTful endpoints to clients. It handles incoming HTTP requests and delegates them to the appropriate microservices via gRPC.
- **post-ms**: A microservice dedicated to managing "Posts". It exposes a gRPC interface consumed by the gateway.
- **user-ms**: A microservice dedicated to managing "Users". It exposes a gRPC interface consumed by the gateway.

### Libraries (`/libs`)

- **proto-files**: Contains the raw `.proto` Protocol Buffer definitions. This is the source of truth for the API contracts between services.
- **grpc-ts-types**: A shared library containing TypeScript types, interfaces, and client code generated from the `.proto` files. This ensures type safety across the monorepo.

## Architecture

```mermaid
graph LR
    Client[Client (HTTP)] --> Gateway[API Gateway]
    Gateway -- gRPC --> UserMS[User Microservice]
    Gateway -- gRPC --> PostMS[Post Microservice]
```

## Getting Started

To run the project locally, you can use the Nx commands.

### Serve all apps

```bash
nx run-many -t serve
```

### Serve specific app

```bash
nx serve api-gateway
nx serve user-ms
nx serve post-ms
```
# nest-grpc-micro-services
