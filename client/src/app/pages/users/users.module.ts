import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { IconModule } from 'src/app/components/icon/icon.module';
import { UserModule } from './user/user.module';
import { UserComponent } from './user/user.component';
import { UserFormModule } from 'src/app/components/user-form/user-form.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    IconModule,
    UserModule,
    UserFormModule,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent, children: [
          { path: ':id', component: UserComponent }
        ]
      }
    ]),
  ],
})
export class UsersModule { }
