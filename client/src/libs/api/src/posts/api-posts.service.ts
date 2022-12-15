import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiModule } from '../api.module';
import { IPost } from '../interfaces';
import { IPostService } from './api-posts.service.interface';


@Injectable({
    providedIn: ApiModule
})
export class ApiPostsService implements IPostService {
    getPosts(): Observable<IPost[]> {
        throw new Error('Method not implemented.');
    }

    addPost(newPost: IPost): Observable<IPost> {
        throw new Error('Method not implemented.');
    }

    updatePost(postToUpdate: IPost): Observable<IPost> {
        throw new Error('Method not implemented.');
    }

    deletePost(postId: number): Observable<number | undefined> {
        throw new Error('Method not implemented.');
    }
}
