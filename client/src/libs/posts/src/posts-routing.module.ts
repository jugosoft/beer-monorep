import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/auth/src/auth.guard';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
    }, {
        path: ':id', component: PostDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostsRoutingModule { }
