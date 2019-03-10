import { DeThi } from './../../../../Models/dethi';
import { Component, OnInit } from '@angular/core';
import { TransformDataService } from '../../../services/transform-data.service';
import { CauHoi } from './../../../../Models/cauhoi';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-chinhsuadethi',
  templateUrl: './chinhsuadethi.component.html',
  styleUrls: ['./chinhsuadethi.component.scss']
})
export class ChinhsuadethiComponent implements OnInit {
  public DanhSachCauHoi: Array<CauHoi> = [];
  public dethi: FormGroup;
  public baithi: DeThi = new DeThi();
  public listLinhVuc = [
    'Cơ Sở Dữ Liệu',
    'Lập trình Di Động',
    'Lập trình Game',
    'SEO',
    'Lập trình Web',
    'Lập trình Mạng',
    'Lập trình Phần Mềm'
  ];
  public listNgonNgu = [
    'ASP.NET',
    'Python',
    'C++',
    'C#',
    'Java',
    'JavaScript',
    'CSDL SQL'
  ];

  constructor(private transform: TransformDataService) {
    $(document).ready(function () {
      $('#table_taodethi').DataTable();
      $('tbody').sortable();
      $('tbody').disableSelection();
    });

  }

  ngOnInit() {
    this.dethi = new FormGroup({
      'tieuDe': new FormControl(null, Validators.required),
      'ghiChu': new FormControl(null, Validators.required),
      'thoiGian': new FormControl(null, Validators.required),
      'diem': new FormControl(null, Validators.required),
      'goiY': new FormControl(null, Validators.required),
      'chuDe': new FormControl(null, Validators.required),
      'loaiCauHoi': new FormControl(null, Validators.required),
      'capDo': new FormControl(null, Validators.required),
      'linhVuc': new FormControl(null, Validators.required),
      'ngonNgu': new FormControl(null, Validators.required),
      'noiDung': new FormControl(null, Validators.required),
    });

    this.transform.asData.subscribe(kq => {
      if (kq) {
        console.log('====================================');
        console.log('Sua De Thi component');
        console.log('====================================');
        this.dethi = new FormGroup({
          'tieuDe': new FormControl(kq.tieuDe, Validators.required),
          'ghiChu': new FormControl(kq.ghiChu, Validators.required),
          'thoiGian': new FormControl(kq.thoiGian, Validators.required),
          'diem': new FormControl(kq.diem, Validators.required),
          'goiY': new FormControl(kq.goiY, Validators.required),
          'chuDe': new FormControl(kq.chuDe, Validators.required),
          'loaiCauHoi': new FormControl(kq.loaiCauHoi, Validators.required),
          'capDo': new FormControl(kq.capDo, Validators.required),
          'linhVuc': new FormControl(kq.linhVuc, Validators.required),
          'ngonNgu': new FormControl(kq.ngonNgu, Validators.required),
          'noiDung': new FormControl(kq.noiDung, Validators.required),
        });
      }
    });
  }

  ChonCauHoi(cauhoi: CauHoi) {
    if (this.baithi.danhSachCauHoi.indexOf(cauhoi) !== -1) {
      this.baithi.danhSachCauHoi.splice(this.baithi.danhSachCauHoi.indexOf(cauhoi), 1);
    } else {
      this.baithi.danhSachCauHoi.push(cauhoi);
    }
  }

  TaoDeThi() {
    this.transform.TransformData(this.baithi);
    this.baithi = new DeThi();
  }

}
