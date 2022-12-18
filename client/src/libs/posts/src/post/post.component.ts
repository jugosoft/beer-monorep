import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ApiPostsService } from 'src/libs/api';
import { IPost } from 'src/libs/interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
    @Input() postId!: Guid;
    post!: IPost;

    constructor(
        private readonly apiPosts: ApiPostsService
    ) { }

    ngOnInit(): void {
        this.apiPosts.getPosts().subscribe(posts => {
            const postFiltered = posts.filter(post => post.id.equals(this.postId)).pop();
            if (postFiltered) {
                this.post = postFiltered;
            }
        });
    }
}
