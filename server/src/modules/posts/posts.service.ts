import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities';

import { PostEntity } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostInput } from './inputs';


@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>
    ) { }

    async create(
        currentUser: UserEntity,
        createPostInput: CreatePostInput
    ): Promise<PostEntity> {
        let post = new PostEntity();
        Object.assign(post, createPostInput);

        if (!createPostInput.tagList) {
            post.tagList = [];
        }

        post.slug = 'axaxaxaxa';
        post.author = currentUser;
        return await this.postRepository.save(post);
    }
}