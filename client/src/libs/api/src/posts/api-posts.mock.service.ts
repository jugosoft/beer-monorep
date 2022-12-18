import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';

import { IPost, IPostAbstract } from 'src/libs/interfaces';
import { ApiModule } from '../api.module';
import { IPostService } from './api-posts.service.interface';

const posts: IPost[] = [{
    id: Guid.parse('ac1cc22f-7f4f-4840-b70d-05448aaa81a6'),
    author: 'diman',
    abstracts: [{
        id: Guid.parse('1b93418e-e0fe-4b90-a39d-f73e99b72684'),
        postId: Guid.parse('ac1cc22f-7f4f-4840-b70d-05448aaa81a6'),
        order: 0,
        text: 'lorem ipusm dolor sit amet mothefucka'
    }, {
        id: Guid.parse('8cbdc49f-4013-42ba-a33e-714b3f3960a6'),
        postId: Guid.parse('ac1cc22f-7f4f-4840-b70d-05448aaa81a6'),
        order: 0,
        text: 'lorem ipusm dolor sit amet mothefucka 222'
    }],
    createdAt: new Date(),
    updatedAt: new Date()
}, {
    id: Guid.parse('bc1cc22f-7f4f-4840-b70d-05448aaa81a6'),
    author: 'diman',
    abstracts: [{
        id: Guid.parse('1b93418e-e0fe-4b90-a39d-f73e99b72684'),
        postId: Guid.parse('bc1cc22f-7f4f-4840-b70d-05448aaa81a6'),
        order: 0,
        text: 'lorem ipusm dolor sit amet mothefucka'
    }, {
        id: Guid.parse('8cbdc49f-4013-42ba-a33e-714b3f3960a6'),
        postId: Guid.parse('bc1cc22f-7f4f-4840-b70d-05448aaa81a6'),
        order: 0,
        text: 'lorem ipusm dolor sit amet mothefucka 222'
    }],
    createdAt: new Date(),
    updatedAt: new Date()
}];

@Injectable({
    providedIn: ApiModule
})
export class ApiPostsService implements IPostService {
    getPosts(): Observable<IPost[]> {
        return of(posts);
    }

    addPost(newPost: IPost): Observable<IPost> {
        if (!newPost.abstracts) {
            throw new Error('Для поста нужен хотя бы один абзац');
        }

        const newPostId: Guid = Guid.create();
        const abstracts: IPostAbstract[] = newPost.abstracts.map(abstract => {
            return {
                ...abstract,
                id: Guid.create(),
                postId: newPostId,
            }
        });

        const post: IPost = {...newPost, id: newPostId, abstracts: abstracts};

        posts.push(newPost);

        return of(post);
    }

    updatePost(todoToUpdate: IPost): Observable<IPost> {
        throw new Error('Method not implemented.');
    }

    deletePost(postId: number): Observable<number | undefined> {
        throw new Error('Method not implemented.');
    }
}
