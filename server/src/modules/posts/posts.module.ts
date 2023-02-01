import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';


@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule {

}