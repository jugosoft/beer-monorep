import { Observable } from 'rxjs';
import { IPost } from 'src/libs/interfaces';


export interface IPostService {
    getPosts(): Observable<IPost[]>;
    addPost(newPost: IPost): Observable<IPost>;
    updatePost(postToUpdate: IPost): Observable<IPost>;
    deletePost(postId: number): Observable<number | undefined>;
}
