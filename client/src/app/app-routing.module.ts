import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/auth/src/auth.guard';

const routes: Routes = [{
    path: 'posts',
    loadChildren: () => import('src/libs/posts').then(m => m.PostsModule)
}, {
    path: 'auth',
    loadChildren: () => import('src/libs/auth').then(m => m.AuthModule)
}, {
    path: 'users',
    loadChildren: () => import('src/libs/admin/users').then(m => m.UsersModule),
    canActivate: [AuthGuard]
}, {
    path: 'beers',
    loadChildren: () => import('src/libs/beers').then(m => m.BeersModule)
}, {
    path: 'about',
    loadChildren: async () => (await import('./pages/about/about.module')).AboutModule
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
}, {
    path: '**', redirectTo: '/'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
