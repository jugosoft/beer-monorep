import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';

import { GetCurrentUser, GetCurrentUserId } from 'src/common';
import { UserEntity } from 'src/entities';
import { AtGuard } from '../auth';
import { CreatePostInput, UpdatePostInput } from './inputs';
import { PostsService } from './posts.service';
import { IPostResponse, IPostsResponse } from './types';

export interface IPostsGetListQueryParams {
    limit: number;
    offset: number;
    tag: string;
    author: string;
    favorited: boolean;
}

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) { }

    @Get()
    async getPosts(
        @GetCurrentUserId() currentUserId: number,
        @Query() queryParams: IPostsGetListQueryParams
    ): Promise<IPostsResponse> {
        return await this.postsService.getPosts(currentUserId, queryParams);
    }

    @Post()
    @UseGuards(AtGuard)
    @UsePipes(new ValidationPipe())
    async createPost(
        @GetCurrentUser() currentUser: UserEntity,
        @Body() createPostInput: CreatePostInput
    ): Promise<IPostResponse> {
        const post = await this.postsService.create(currentUser, createPostInput);
        return this.postsService.buildResponse(post);
    }

    @Get(':slug')
    async getPostBySlug(
        @Param('slug') slug: string
    ): Promise<IPostResponse> {
        const post = await this.postsService.getPostBySlug(slug);
        return this.postsService.buildResponse(post);
    }

    @Delete(':slug')
    @UseGuards(AtGuard)
    async deletePost(
        @Param('slug') slug: string,
        @GetCurrentUserId() currentUserId: number
    ): Promise<boolean> {
        const result = await this.postsService.delete(slug, currentUserId);
        return result.affected === 1;
    }

    @Put(':slug')
    @UseGuards(AtGuard)
    @UsePipes(new ValidationPipe())
    async updatePost(
        @Param('slug') slug: string,
        @Body() updatePostInput: UpdatePostInput,
        @GetCurrentUserId() currentUserId: number
    ): Promise<IPostResponse> {
        const updatedPost = await this.postsService.update(slug, updatePostInput, currentUserId);
        return this.postsService.buildResponse(updatedPost);
    }
}
