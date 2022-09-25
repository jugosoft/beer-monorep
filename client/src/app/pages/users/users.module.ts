import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { IconModule } from 'src/app/components/icon/icon.module';
import { UserModule } from './user/user.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    IconModule,
    UserModule,
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
