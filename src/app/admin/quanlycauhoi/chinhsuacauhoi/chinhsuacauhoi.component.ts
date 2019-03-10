import { Component, OnInit } from '@angular/core';
import { CauHoi } from '../../../../Models/cauhoi';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList/*, FirebaseListObservable, FirebaseObjectObservable*/ } from 'angularfire2/database';
import { TransformDataService } from './../../../services/transform-data.service';

declare var $: any;
declare var DecoupledEditor: any;

@Component({
  selector: 'app-chinhsuacauhoi',
  templateUrl: './chinhsuacauhoi.component.html',
  styleUrls: ['./chinhsuacauhoi.component.scss']
})
export class ChinhsuacauhoiComponent implements OnInit {
  public DanhSachCauHoi: Array<CauHoi> = [];
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

  public questsRef: AngularFireList<any>;
  public quests;
  public item;
  public key;
  public cauHoi: FormGroup;

  constructor(private db: AngularFireDatabase, private transform: TransformDataService) {
    // Kết nối với database
    this.questsRef = db.list('/NganHangCauHoi');

  }

  ngOnInit() {
    DecoupledEditor
      .create(document.querySelector('#noiDung'))
      .then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-noidung');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
      })
      .catch(error => {
        console.error(error);
      });

    this.cauHoi = new FormGroup({
      'id': new FormControl(null, Validators.required),
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
      'ngayTao': new FormControl(null, Validators.required),
      'nguoiTao': new FormControl(null, Validators.required),
    });

    this.transform.asData.subscribe(kq => {
      if (kq) {
        this.key = kq;
        this.quests = this.db.object('NganHangCauHoi/' + kq).valueChanges().forEach((item) => {
          this.item = item;
          this.cauHoi = new FormGroup({
            'id': new FormControl(this.item.id, Validators.required),
            'tieuDe': new FormControl(this.item.tieuDe, Validators.required),
            'ghiChu': new FormControl(this.item.ghiChu, Validators.required),
            'thoiGian': new FormControl(this.item.thoiGian, Validators.required),
            'diem': new FormControl(this.item.diem, Validators.required),
            'goiY': new FormControl(this.item.goiY, Validators.required),
            'nguoiTao': new FormControl(this.item.nguoiTao, Validators.required),
            'ngayTao': new FormControl(this.item.ngayTao, Validators.required),
            'chuDe': new FormControl(this.item.chuDe, Validators.required),
            'loaiCauHoi': new FormControl(this.item.loaiCauHoi, Validators.required),
            'capDo': new FormControl(this.item.capDo, Validators.required),
            'linhVuc': new FormControl(this.item.linhVuc, Validators.required),
            'ngonNgu': new FormControl(this.item.ngonNgu, Validators.required),
            'noiDung': new FormControl(this.item.noiDung, Validators.required),
            'daXoa': new FormControl(this.item.daXoa, Validators.required),
            'trangThai': new FormControl(this.item.trangThai, Validators.required),
            'danhSachDapAn': new FormControl(this.item.danhSachDapAn, Validators.required),
          });
          document.getElementById('noiDung').getElementsByTagName('p')[0].innerText = this.item.noiDung;
        });

      }
    });
  }

  TaoCauHoi(cauhoi: CauHoi) {
    cauhoi.ngayTao = new Date().toLocaleDateString();
    // this.DanhSachCauHoi.push(cauhoi);
    (<HTMLElement>document.getElementsByClassName('alert')[0]).style.display =
      'block';
    setTimeout(() => {
      (<HTMLElement>document.getElementsByClassName('alert')[0]).style.display =
        'none';
    }, 2222);
  }

  setNoiDung(cauhoi: CauHoi) {
    cauhoi.noiDung = document.getElementById('noiDung').getElementsByTagName('p')[0].innerText;
    this.cauHoi.get('noiDung').setValue(cauhoi.noiDung);
    console.log(this.cauHoi.get('noiDung').value);
  }

  TaoForm(num: number) {
    console.log(num);
    const a = $('#goiy');
    for (let i = 0; i < num; i++) {

    }
  }

}
