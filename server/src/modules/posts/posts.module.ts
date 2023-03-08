import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities';
import { PostEntity } from 'src/entities/post.entity';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';


@Module({
    imports: [TypeOrmModule.forFeature([PostEntity, UserEntity])],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule {

}