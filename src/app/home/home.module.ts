import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '../../../node_modules/@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Import Module
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { TrangTuDienModule } from './trang-tu-dien/trang-tu-dien.module';

//Import Component
import { RouterComponent } from './router/router.component';
import { TrangChuComponent } from './trang-chu/trang-chu/trang-chu.component';
import { TrangTuDienComponent } from './trang-tu-dien/trang-tu-dien/trang-tu-dien.component';
import { FooterComponent } from './router/footer/footer.component';
import { TrangDangNhapModule } from './trang-dang-nhap/trang-dang-nhap.module';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap/trang-dang-nhap.component';
import { TrangDanhSachDanhMucModule } from './trang-danh-sach-danh-muc/trang-danh-sach-danh-muc.module';
import { TrangDanhSachDanhMucComponent } from './trang-danh-sach-danh-muc/trang-danh-sach-danh-muc/trang-danh-sach-danh-muc.component';
import { TrangChiTietDanhMucComponent } from './trang-danh-sach-danh-muc/trang-danh-sach-danh-muc/trang-chi-tiet-danh-muc/trang-chi-tiet-danh-muc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyBreadcrumbModule } from './my-breadcrumb/my-breadcrumb.module';
import { SetTitleService } from '../services/set-title.service';



const homeRouter: Routes = [
  {
    path:'',component:RouterComponent,children:
    [
      {path:'',component:TrangChuComponent,data:{title: 'Trang Chủ - Hệ thống trắc nghiệm'}},
      {path:'trangchu',component:TrangChuComponent, data:{title: 'Trang Chủ - Hệ thống trắc nghiệm'}},
      {path:'tudien',component:TrangTuDienComponent, data:{title: 'Từ Điển - Hệ thống trắc nghiệm'}},
      {path:'dangnhap',component:TrangDangNhapComponent, data:{title: 'Đăng Nhập - Hệ thống trắc nghiệm'}},
      {path:'danhsachdanhmuc',component:TrangDanhSachDanhMucComponent, data:{title: 'Danh Mục - Hệ thống trắc nghiệm'}},
      {path:':id',component:TrangChiTietDanhMucComponent},
      // {path:'**', component: PageNotFoundComponent}
    ],
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouter),
    HttpClientModule,
    
    TrangChuModule,
    TrangDangNhapModule,
    TrangTuDienModule,
    TrangDanhSachDanhMucModule,
    MyBreadcrumbModule,

  ],

  declarations: [
    RouterComponent,
    FooterComponent,
    PageNotFoundComponent
  ],

  // providers:[SetTitleService]
  
})
export class HomeModule { 
  constructor(titleService: SetTitleService) {
    titleService.setTitle();
  }
}
