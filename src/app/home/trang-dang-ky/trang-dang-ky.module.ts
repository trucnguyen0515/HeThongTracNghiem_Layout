import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import { MyBreadcrumbModule } from '../my-breadcrumb/my-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    MyBreadcrumbModule
  ],
  declarations: [TrangDangKyComponent],
  exports:[TrangDangKyComponent]
})
export class TrangDangKyModule { }
