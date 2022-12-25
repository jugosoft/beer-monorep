import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiBeersService, ApiPostsService } from 'src/libs/api';
import { IBeer, IPost } from 'src/libs/interfaces';

@Component({
    selector: 'app-main',
    templateUrl: './posts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
    posts!: IPost[];
    beers!: IBeer[];

    constructor(
        private readonly apiPosts: ApiPostsService,
        private readonly apiBeers: ApiBeersService
    ) { }

    ngOnInit(): void {
        this.apiPosts.getPosts().subscribe(posts => {
            this.posts = posts;
        });
        this.apiBeers.getBeers().subscribe(beers => {
            this.beers = beers;
            console.log(this.beers);
        });
    }
}
