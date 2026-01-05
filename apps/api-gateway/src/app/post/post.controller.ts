import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import type {
  CreatePostRequest,
  UpdatePostRequest,
} from '@test-ms-grpc/grpc-ts-types';
import {
  POST_PACKAGE_NAME,
  POST_SERVICE_NAME,
  PostServiceClient,
} from '@test-ms-grpc/grpc-ts-types';


@Controller('post')
export class PostController implements OnModuleInit {
  private postService: PostServiceClient;

  constructor(@Inject(POST_PACKAGE_NAME) private readonly post: ClientGrpc) {}

  onModuleInit() {
    this.postService =
      this.post.getService<PostServiceClient>(POST_SERVICE_NAME);
  }

  @Get()
  findAll() {
    return this.postService.getAllPosts({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.getPostById({ id: +id });
  }

  @Post()
  create(@Body() post: CreatePostRequest) {
    return this.postService.createPost(post);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() post: UpdatePostRequest) {
    return this.postService.updatePost({ ...post, id: +id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.deletePost({ id: +id });
  }
}
