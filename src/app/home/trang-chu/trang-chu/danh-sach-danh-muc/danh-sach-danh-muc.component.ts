import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-danh-muc',
  templateUrl: './danh-sach-danh-muc.component.html',
  styleUrls: ['./danh-sach-danh-muc.component.scss']
})
export class DanhSachDanhMucComponent implements OnInit {

  public DanhSach_DanhMuc:Array<any> = [
    { 
      TenDanhMuc:"Tiếng Anh Chuyên Ngành IT",
      IconDanhMuc:"fas fa-globe-americas",
      NoiDungLinhVuc:"TLorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum dolorum officiis quo praesentium impedit animi maxime."

    },
    { 
      TenDanhMuc:"Lập Trình Web", 
      IconDanhMuc:"fas fa-code",
      NoiDungLinhVuc:"TLorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum dolorum officiis quo praesentium impedit animi maxime."
    },
    { TenDanhMuc:"Lập Trình Web Cơ Bản", 
      IconDanhMuc:"fas fa-laptop-code",
      NoiDungLinhVuc:"TLorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum dolorum officiis quo praesentium impedit animi maxime."
    },
    { 
      TenDanhMuc:"Từ Điển Chuyên Ngành IT", 
      IconDanhMuc:"fas fa-language",
      NoiDungLinhVuc:"TLorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum dolorum officiis quo praesentium impedit animi maxime."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
