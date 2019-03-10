import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { MyBreadcrumbModule } from '../my-breadcrumb/my-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    TrangChuModule,
    MyBreadcrumbModule
  ],
  declarations: [TrangDangNhapComponent],
  exports:[TrangDangNhapComponent],

})
export class TrangDangNhapModule { }
