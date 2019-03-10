import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlyuserComponent } from './quanlyuser.component';
import { DanhsachuserComponent } from './danhsachuser/danhsachuser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChinhSuaUserComponent } from './chinh-sua-user/chinh-sua-user.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [QuanlyuserComponent, DanhsachuserComponent, ChinhSuaUserComponent],
  exports: [DanhsachuserComponent],
})
export class QuanlyuserModule { }
