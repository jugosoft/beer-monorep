import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockApiModule } from './mock-api.module';


@Injectable({
    providedIn: MockApiModule
})
export class ApiPostsService {
    getAllPosts(): Observable<any[]> {
        return of([{ id: 1, text: 2 }, { id: 2, text: 222 }]);
    }

    updatePost(post: any): Observable<any | undefined> {
        return of({});
    }
}
