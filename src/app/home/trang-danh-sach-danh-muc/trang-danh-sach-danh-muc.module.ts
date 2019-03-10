import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDanhSachDanhMucComponent } from './trang-danh-sach-danh-muc/trang-danh-sach-danh-muc.component';
import { MyBreadcrumbModule } from '../my-breadcrumb/my-breadcrumb.module';
import { TrangChiTietDanhMucComponent } from './trang-danh-sach-danh-muc/trang-chi-tiet-danh-muc/trang-chi-tiet-danh-muc.component';
import { DanhMucComponent } from './trang-danh-sach-danh-muc/danh-muc/danh-muc.component';

@NgModule({
  imports: [
    CommonModule,
    MyBreadcrumbModule
  ],
  declarations: [TrangDanhSachDanhMucComponent, TrangChiTietDanhMucComponent, DanhMucComponent],
  exports: [TrangDanhSachDanhMucComponent, TrangChiTietDanhMucComponent, DanhMucComponent]
})
export class TrangDanhSachDanhMucModule { }
