import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.scss']
})
export class DanhMucComponent implements OnInit {

  @Input() DanhSachDanhMuc:Array<any>;

  constructor(private router:Router) { }

  ChuyenTrang = (val) => {
    this.router.navigate(['',`${val}`])
  }

  ngOnInit() {
  }

}
