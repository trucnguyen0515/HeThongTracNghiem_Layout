import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.scss']
})
export class DanhMucComponent implements OnInit {

  @Input() DanhSachDanhMuc:any;

  constructor() { }

  ngOnInit() {
  }

}
