import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./pages/main/main.module').then(module => module.MainModule)},
  {path: 'users', loadChildren: () => import('./pages/users/users.module').then(module => module.UsersModule)},
  {path: 'about', loadChildren: () => import('./pages/about/about.module').then(module => module.AboutModule)},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
