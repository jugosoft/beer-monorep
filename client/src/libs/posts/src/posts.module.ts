import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
    declarations: [
        PostsComponent,
        PostComponent,
        PostDetailsComponent
    ],
    imports: [
        CommonModule,
        PostsRoutingModule
    ],
})
export class PostsModule { }
