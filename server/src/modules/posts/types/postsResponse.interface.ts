import { PostEntity } from 'src/entities/post.entity';

export interface IPostsResponse {
    posts: PostEntity[];
    postsCount: number;
}
