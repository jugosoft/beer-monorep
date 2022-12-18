import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiPostsService } from 'src/libs/api';
import { IPost } from 'src/libs/interfaces';

@Component({
    selector: 'app-main',
    templateUrl: './posts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
    posts!: IPost[];

    constructor(
        private readonly apiPosts: ApiPostsService
    ) { }

    ngOnInit(): void {
        this.apiPosts.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
}
