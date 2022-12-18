import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [
        PostsComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PostsComponent
            }
        ]),
    ],
})
export class PostsModule { }
