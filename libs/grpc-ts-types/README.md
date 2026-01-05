# gRPC TypeScript Types Library

This library provides **generated TypeScript types, interfaces, and client classes** derived from the Protocol Buffer definitions in `proto-files`.

## Purpose

- **Type Safety**: Ensures that both the client (API Gateway) and the server (Microservices) use the exact same data structures.
- **Client Generation**: Exports ready-to-use gRPC clients (e.g., `PostServiceClient`, `UserServiceClient`) for NestJS.

## Usage

Import the types or clients directly in your application:

```typescript
import { CreatePostRequest, PostServiceClient } from '@test-ms-grpc/grpc-ts-types';
```
