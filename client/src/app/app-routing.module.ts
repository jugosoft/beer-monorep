import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/auth/src/auth.guard';
import { LoginComponent } from 'src/libs/auth/src/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'users',
    loadChildren: async () => (await import('./pages/users/users.module')).UsersModule,
    canActivate: [AuthGuard]
  }, {
    path: 'about',
    loadChildren: async () => (await import('./pages/about/about.module')).AboutModule
  }, {
    path: '**', redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
