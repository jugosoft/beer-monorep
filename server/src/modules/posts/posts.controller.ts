import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetCurrentUser } from 'src/common';
import { UserEntity } from 'src/entities';
import { PostEntity } from 'src/entities/post.entity';
import { AtGuard } from '../auth';
import { CreatePostInput } from './inputs';

import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) {} 

    @Post()
    @UseGuards(AtGuard)
    async create(
        @GetCurrentUser() currentUser: UserEntity,
        @Body() createPostInput: CreatePostInput
    ): Promise<PostEntity> {
        return this.postsService.create(currentUser, createPostInput);
    }
}
