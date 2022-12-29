import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/auth/src/auth.guard';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [{
    path: '',
    component: PostsComponent,
}, {
    path: ':id', canActivate: [AuthGuard], component: PostDetailsComponent
}, {
    path: '**', redirectTo: '/'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostsRoutingModule { }
