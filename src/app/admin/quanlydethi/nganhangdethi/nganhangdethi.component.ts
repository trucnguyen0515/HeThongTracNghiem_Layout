import { SuadethiService } from './../../../services/suadethi.service';
import { DeThi } from './../../../../Models/dethi';
import { Component, OnInit } from '@angular/core';
import { TransformDataService } from '../../../services/transform-data.service';

declare var $: any;
@Component({
  selector: 'app-nganhangdethi',
  templateUrl: './nganhangdethi.component.html',
  styleUrls: ['./nganhangdethi.component.scss']
})
export class NganhangdethiComponent implements OnInit {
  public DanhSachDeThi: Array<DeThi> = [];
  public dethi: DeThi = new DeThi();

  constructor(private transform: TransformDataService, private suadethi: SuadethiService) {
    $(document).ready(function() {
      $('#table_dethi').DataTable();
      $('tbody').sortable();
      $('tbody').disableSelection();
    });
  }

  ngOnInit() {
    this.transform.asData.subscribe(kq => {
      this.dethi = kq;
      if (this.dethi) {
        this.DanhSachDeThi.unshift(this.dethi);
      }
    });
  }

  ChinhSuaDeThi(dethi: DeThi) {
    this.suadethi.TransformData(dethi);
  }

  XoaDeThi(tieude: string) {
    for (const dethi of this.DanhSachDeThi) {
      if (dethi.tieuDe === tieude) {
        dethi.daXoa = !dethi.daXoa;
        console.log(this.DanhSachDeThi);
      }
    }
  }
}
