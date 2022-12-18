import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/auth/src/auth.guard';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
}, {
    path: 'auth',
    loadChildren: () => import('src/libs/auth').then(m => m.AuthModule)
}, {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
}, {
    path: 'about',
    loadChildren: async () => (await import('./pages/about/about.module')).AboutModule
}, {
    path: '**', redirectTo: '/'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // preloadingStrategy: PreloadAllModules,
    })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
