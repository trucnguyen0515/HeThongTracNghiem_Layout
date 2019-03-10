import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/Home/home.service';
import { Subscription } from 'rxjs';

// Models
import { DanhMuc } from '../../models/danhmuc';
import { DanhSachDanhMuc } from '../../models/danhsachdanhmuc';


@Component({
  selector: 'app-trang-danh-sach-danh-muc',
  templateUrl: './trang-danh-sach-danh-muc.component.html',
  styleUrls: ['./trang-danh-sach-danh-muc.component.scss']
})
export class TrangDanhSachDanhMucComponent implements OnInit, OnDestroy {

  private ten_Trang:string = 'Danh Sách Danh Mục - Hệ thống trắc nghiệm'
  private tenTrang:string = "Danh Sách Danh Mục";
  private DanhSachDanhMuc:Array<DanhMuc>;

  private flag:boolean = false;
  private paramsSub1: Subscription;

  constructor(private service_DanhSachDanhMuc:HomeService) { }

  checkPathName = () => {
    if(window.location.pathname === "/"){
      document.getElementById('DanhSach_DanhMuc').style.paddingTop = "0";
      this.flag = false
    } else {
      this.flag = true;
    }
  }

  Get_DanhMuc = () => {
    this.paramsSub1 = this.service_DanhSachDanhMuc.get_DanhMuc()
    .subscribe(val => this.DanhSachDanhMuc = [...val],
               err => console.log(err)
    );
  }

  ngOnInit() {
    this.checkPathName();
    this.Get_DanhMuc();
  }

  ngOnDestroy() {
    this.paramsSub1.unsubscribe();
  }

}
