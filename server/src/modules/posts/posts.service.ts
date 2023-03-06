import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import slugify from 'slugify';

import { UserEntity, PostEntity } from 'src/entities';
import { DeleteResult, Repository } from 'typeorm';
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

    public async delete(
        slug: string,
        userId: number
    ): Promise<DeleteResult> {
        const post = await this.getPostBySlug(slug);
        if (!post) {
            throw new HttpException('Post doesnt exist', HttpStatus.NOT_FOUND);
        }

        if (post.author.id !== userId) {
            throw new HttpException('Current user is not the author', HttpStatus.FORBIDDEN);
        }

        return await this.postRepository.delete({ slug });
    }

    async getPostById(
        id: number
    ): Promise<PostEntity> {
        return await this.postRepository.findOne({
            where: { id: id }
        });
    }

    async getPostBySlug(
        slug: string
    ): Promise<PostEntity> {
        return await this.postRepository.findOne({
            where: { slug }
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
