import { Controller } from '@nestjs/common';
import { EmptyPostRequest, PostIdRequest, PostRequest, PostResponse, PostServiceController, PostServiceControllerMethods, PostsResponse } from '@test-ms-grpc/grpc-ts-types';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Controller('post')
@PostServiceControllerMethods()
export class PostController implements PostServiceController {
  constructor(private readonly postService: PostService) {}

  getAllPosts(_: EmptyPostRequest): Promise<PostsResponse> | Observable<PostsResponse> | PostsResponse {
    return this.postService.getAllPosts();
  }

  getPostById(request: PostIdRequest): Promise<PostResponse> | Observable<PostResponse> | PostResponse {
    return this.postService.getPostById(request.id);
  }

  createPost(request: PostRequest): Promise<PostResponse> | Observable<PostResponse> | PostResponse {
    return this.postService.createPost(request);
  }

  updatePost(request: PostRequest): Promise<PostResponse> | Observable<PostResponse> | PostResponse {
    return this.postService.updatePost(request);
  }

  deletePost(request: PostIdRequest): Promise<PostResponse> | Observable<PostResponse> | PostResponse {
    return this.postService.deletePost(request.id);
  }
}
