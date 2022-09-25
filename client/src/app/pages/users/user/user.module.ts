import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { IconModule } from 'src/app/components/icon/icon.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class UserModule { }
