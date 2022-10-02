import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { IconModule } from 'src/app/components/icon/icon.module';
import { UserFormModule } from 'src/app/components/user-form/user-form.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    UserFormModule,
  ]
})
export class UserModule { }
