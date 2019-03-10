import { CauHoi } from './../../../../Models/cauhoi';
import { Component, OnInit } from '@angular/core';
import { TransformDataService } from '../../../services/transform-data.service';

import { AngularFireDatabase, AngularFireList/*, FirebaseListObservable, FirebaseObjectObservable*/ } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-nganhangcauhoi',
  templateUrl: './nganhangcauhoi.component.html',
  styleUrls: ['./nganhangcauhoi.component.scss']
})
export class NganhangcauhoiComponent implements OnInit {
  public DanhSachCauHoi: Array<any> = new Array;
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
  public quests: Observable<any[]>;
  dataSet: Array<any> = new Array;

  constructor(private db: AngularFireDatabase, private transform: TransformDataService) {
    // Kết nối với database
    this.questsRef = this.db.list('/NganHangCauHoi');
    // Đoạn này để truy xuất key của database
    this.quests = this.questsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.quests.forEach(quest => {
      // Đẩy data vào 1 mảng để dễ xử lý
      this.DanhSachCauHoi.push(quest);

      $(document).ready(function () {
        $('#table_cauhoi').DataTable();
        $('tbody').sortable();
        $('tbody').disableSelection();
      });
    });
    // console.log(this.DanhSachCauHoi);
  }

  ngOnInit() {}


  SuaCauHoi(key: any) {
    this.transform.TransformData(key);
  }

  XoaCauHoi(key: any) {
    // this.questsRef.update(key, {daXoa: false});
  }
}
