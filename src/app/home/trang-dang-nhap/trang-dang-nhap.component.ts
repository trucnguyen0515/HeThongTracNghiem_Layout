import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { Title }     from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'app-trang-dang-nhap',
  templateUrl: './trang-dang-nhap.component.html',
  styleUrls: ['./trang-dang-nhap.component.scss']
})
export class TrangDangNhapComponent implements OnInit {

  @ViewChild('nameInput') nameInput;

  constructor(private router:Router, private titleService:Title) { }

  TaoTaiKhoan() {
    this.router.navigate(['dangky']);
  }

  public setTitle() {
    this.titleService.setTitle("Đăng Nhập - Hệ thống trắc nghiệm");
  }

  ngOnInit() {
    this.setTitle();
  }



}
