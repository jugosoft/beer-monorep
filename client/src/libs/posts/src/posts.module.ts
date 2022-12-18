import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
    declarations: [
        PostsComponent,
        PostComponent,
        PostDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PostsComponent,
            }, {
                path: ':id', component: PostDetailsComponent
            }
        ])
    ],
})
export class PostsModule { }
