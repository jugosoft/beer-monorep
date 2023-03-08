import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import slugify from 'slugify';

import { UserEntity, PostEntity } from 'src/entities';
import { AppDataSource } from 'src/ormconfig';
import { DeleteResult, Repository } from 'typeorm';
import { CreatePostInput, UpdatePostInput } from './inputs';
import { IPostsGetListQueryParams } from './posts.controller';
import { IPostResponse, IPostsResponse } from './types';


@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
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

    public async update(
        slug: string,
        updatePostInput: UpdatePostInput,
        userId: number
    ): Promise<PostEntity> {
        if (!slug) {
            throw new HttpException('Empty slug', HttpStatus.NOT_FOUND);
        }

        const post = await this.getPostBySlug(slug);
        if (!post) {
            throw new HttpException('Post doesnt exist', HttpStatus.NOT_FOUND);
        }

        if (post.author.id !== userId) {
            throw new HttpException('Current user is not the author', HttpStatus.FORBIDDEN);
        }

        Object.assign(post, updatePostInput);

        return await this.postRepository.save(post);
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

    async getPosts(
        currentUserId: number,
        query: IPostsGetListQueryParams
    ): Promise<IPostsResponse> {
        const queryBuilder = AppDataSource.getRepository(PostEntity)
            .createQueryBuilder('posts')
            .leftJoinAndSelect('posts.author', 'author')
            .orderBy('posts.createdAt', 'DESC');

        const postsCount = await queryBuilder.getCount();

        if (query.tag) {
            queryBuilder.andWhere('posts.tagList LIKE :tag', {
                tag: `%${query.tag}%`
            });
        }

        if (query.author) {
            const author = await this.userRepository.findOne({
                where: {
                    name: query.author
                }
            });
            queryBuilder.andWhere('posts.authorId = :id', {
                id: author.id
            });
        }

        if (query.limit) {
            queryBuilder.limit(query.limit);
        }

        if (query.offset) {
            queryBuilder.offset(query.offset);
        }

        const posts = await queryBuilder.getMany();

        return { posts, postsCount };
    }

    buildResponse(post: PostEntity): IPostResponse {
        return { post };
    }

    generateRandomPrefix(): string {
        return (Math.random() * 1000000 | 0).toString();
    }

    getSlug(title): string {
        return `${this.generateRandomPrefix()}-${slugify(title, { lower: true })}`;
    }
}
