import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiPostsService } from 'src/libs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
    constructor(
        private readonly apiPosts: ApiPostsService
    ) { }

    ngOnInit(): void {
        this.apiPosts.getAllPosts().subscribe((data) => {
            console.log(data);
        });
    }
}
