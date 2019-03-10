import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trang-dang-nhap',
  templateUrl: './trang-dang-nhap.component.html',
  styleUrls: ['./trang-dang-nhap.component.scss']
})
export class TrangDangNhapComponent implements OnInit {

  constructor(private route: Router) { }

  private ten_Trang:string = 'Đăng Nhập - Hệ thống trắc nghiệm';
  private tenTrang:string = "Đăng Nhập"

  ngOnInit() {
  }

  ChuyenTrang = () => {
    this.route.navigate(['dangky']);
  }

}
