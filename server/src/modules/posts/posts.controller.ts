import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetCurrentUser } from 'src/common';
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
    async create(
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

    @Get(':id')
    async getPostById(
        @Param() id: number
    ): Promise<IPostResponse> {
        const post = await this.postsService.getPostById(id);
        return this.postsService.buildResponse(post);
    }
}
