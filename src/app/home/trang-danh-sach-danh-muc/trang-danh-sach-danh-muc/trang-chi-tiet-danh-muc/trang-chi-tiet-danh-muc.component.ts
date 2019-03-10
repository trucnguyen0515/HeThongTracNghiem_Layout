import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DanhMuc } from '../../../models/danhmuc';
import { DanhSachDanhMuc } from '../../../models/danhsachdanhmuc';
import { HomeService } from 'src/app/services/Home/home.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-trang-chi-tiet-danh-muc',
  templateUrl: './trang-chi-tiet-danh-muc.component.html',
  styleUrls: ['./trang-chi-tiet-danh-muc.component.scss']
})
export class TrangChiTietDanhMucComponent implements OnInit, OnDestroy {

  constructor(private title:Title,private activeRoute:ActivatedRoute,private service_Home:HomeService) { }

  private id_Course:any;
  private ten_DanhMuc:any;
  private paramsSub1:Subscription;
  private paramsSub2:Subscription;


  getID = () => {
    this.paramsSub1 = this.activeRoute.params.subscribe((thamso:any) => {
      this.id_Course = thamso;
    })
  }

  get_ChiTietDanhMuc = () => {
    this.service_Home.get_ChiTiet_DanhMuc(this.id_Course.id).subscribe(
      val => this.ten_DanhMuc = val[0].TenDanhMuc,
      err => console.log(err),
      () => this.title.setTitle(this.ten_DanhMuc + " - Hệ thống trắc nghiệm")
  )}

  ngOnInit() {
    this.getID();
    this.get_ChiTietDanhMuc();
  }

  ngOnDestroy() {
    // this.paramsSub1.unsubscribe();
  }

}
