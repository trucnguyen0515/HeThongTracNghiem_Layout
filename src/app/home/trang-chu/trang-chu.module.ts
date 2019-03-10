import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import component
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HeaderNavComponent } from '../router/header-nav/header-nav.component';
import { ButtonResponsiveMenuComponent } from '../router/header-nav/button-responsive-menu/button-responsive-menu.component';
import { UpdateAccountComponent } from './trang-chu/update-account/update-account.component';
import { CamNhanNguoiDungComponent } from './trang-chu/cam-nhan-nguoi-dung/cam-nhan-nguoi-dung.component';
import { DownloadMobileComponent } from './trang-chu/download-mobile/download-mobile.component';
import { BannerComponent } from './trang-chu/banner/banner.component';
import { TrangDanhSachDanhMucModule } from '../trang-danh-sach-danh-muc/trang-danh-sach-danh-muc.module';


@NgModule({
  imports: [
    CommonModule,
    TrangDanhSachDanhMucModule
  ],
  declarations: [
    TrangChuComponent,
    BannerComponent,
    HeaderNavComponent,
    ButtonResponsiveMenuComponent,
    UpdateAccountComponent,
    CamNhanNguoiDungComponent,
    DownloadMobileComponent,
  ],
  exports:[
    TrangChuComponent,
    BannerComponent,
    HeaderNavComponent,
    ButtonResponsiveMenuComponent,
    UpdateAccountComponent,
    CamNhanNguoiDungComponent,
    DownloadMobileComponent
  ]
})
export class TrangChuModule { }
