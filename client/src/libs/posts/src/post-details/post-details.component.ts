import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ApiPostsService } from 'src/libs/api';
import { IPost } from 'src/libs/interfaces';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailsComponent implements OnInit {
    post!: IPost;

    constructor(
        private readonly apiPosts: ApiPostsService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.apiPosts.getPosts().subscribe(posts => {
                const postFiltered = posts.filter(post => post.id.equals(Guid.parse(params['id']))).pop();
                if (postFiltered) {
                    this.post = postFiltered;
                } else {
                    this.router.navigate(['/posts']);
                }
            });
        });
    }
}
