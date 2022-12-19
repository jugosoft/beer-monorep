import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login';
import { LogoutComponent } from './logout';
import { RegisterComponent } from './register';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
}, {
    path: '**', redirectTo: '/'
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
