import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';

import { GetCurrentUser, GetCurrentUserId } from 'src/common';
import { UserEntity } from 'src/entities';
import { AtGuard } from '../auth';
import { CreatePostInput } from './inputs';
import { PostsService } from './posts.service';
import { IPostResponse } from './types';


@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) { }

    @Post()
    @UseGuards(AtGuard)
    async createPost(
        @GetCurrentUser() currentUser: UserEntity,
        @Body() createPostInput: CreatePostInput
    ): Promise<IPostResponse> {
        const post = await this.postsService.create(currentUser, createPostInput);
        return this.postsService.buildResponse(post);
    }

    @Get()
    async getPosts(): Promise<IPostResponse[]> {
        const posts = await this.postsService.getPosts();
        return posts.map(post => this.postsService.buildResponse(post));
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
    ): Promise<any> {
        return await this.postsService.delete(slug, currentUserId);
    }
}
