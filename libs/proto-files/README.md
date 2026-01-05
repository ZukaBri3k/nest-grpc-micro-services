# Proto Files Library

This library contains the **Protocol Buffer (.proto)** definitions for the project. These files define the service contracts and message structures used for gRPC communication between the API Gateway and the Microservices.

## Contents

- `post.proto`: Definitions for the Post Service.
- `user.proto`: Definitions for the User Service.

## Usage

These files are used as the source to generate:

1.  TypeScript interfaces and clients (in `grpc-ts-types`).
2.  Any other language bindings if needed in the future.
