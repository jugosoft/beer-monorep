import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: async () => (await import('./pages/main/main.module')).MainModule},
  {path: 'users', loadChildren: async () => (await import('./pages/users/users.module')).UsersModule},
  {path: 'about', loadChildren: async () => (await import('./pages/about/about.module')).AboutModule},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
