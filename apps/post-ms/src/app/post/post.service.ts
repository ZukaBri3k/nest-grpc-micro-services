import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRequest, PostResponse, PostsResponse } from '@test-ms-grpc/grpc-ts-types';

@Injectable()
export class PostService {
  private posts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Content 1',
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content 2',
    },
  ];

  getAllPosts(): PostsResponse {
    return {
      posts: this.posts,
    };
  }

  getPostById(id: number): PostResponse {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  createPost(post: PostRequest): PostResponse {
    const newPost = {
      id: this.posts.length + 1,
      title: post.title,
      content: post.content,
    };
    this.posts.push(newPost);
    return newPost;
  }

  updatePost(post: PostRequest): PostResponse {
    const postIndex = this.posts.findIndex((post) => post.id === post.id);
    if (postIndex === -1) {
      throw new NotFoundException('Post not found');
    }
    this.posts[postIndex] = post;
    return post;
  }

  deletePost(id: number): PostResponse {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException('Post not found');
    }
    return this.posts.splice(postIndex, 1)[0];
  }
}
