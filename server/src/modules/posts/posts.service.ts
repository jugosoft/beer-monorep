import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import slugify from 'slugify';
import { UserEntity } from 'src/entities';

import { PostEntity } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostInput } from './inputs';
import { IPostResponse } from './types';


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

        post.slug = this.getSlug(post.title);
        post.author = currentUser;
        return await this.postRepository.save(post);
    }

    async getPostById(
        id: number
    ): Promise<PostEntity> {
        return await this.postRepository.findOne({
            where: { id }
        });
    }

    async getPosts(): Promise<PostEntity[]> {
        const posts = await this.postRepository.find({take: 20});
        return posts;
    }

    buildResponse(post: PostEntity): IPostResponse {
        return { post };
    }

    generateRandomPrefix(): string {
        return (Math.random() * 1000000 | 0).toString();
    }

    getSlug(title): string {
        return `${this.generateRandomPrefix()}-${slugify(title, {lower: true})}`;
    }
}
