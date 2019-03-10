import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.scss']
})
export class TrangDangKyComponent implements OnInit {

  constructor(private router:Router, private titleService:Title) { }

  public setTitle() {
    this.titleService.setTitle("Đăng Ký - Hệ thống trắc nghiệm");
  }



  ngOnInit() {
    this.setTitle();
  }

}
