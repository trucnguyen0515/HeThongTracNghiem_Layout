import { TransformDataService } from './../../../services/transform-data.service';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList/*, FirebaseListObservable, FirebaseObjectObservable*/ } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-danhsachuser',
  templateUrl: './danhsachuser.component.html',
  styleUrls: ['./danhsachuser.component.scss']
})
export class DanhsachuserComponent implements OnInit {
  public usersRef: AngularFireList<any>;
  public users: Observable<any[]>;
  dataSet: Array<any> = new Array;

  constructor(private db: AngularFireDatabase, private transform: TransformDataService) {
    // Kết nối với database
    this.usersRef = this.db.list('/Users');
    // Đoạn này để truy xuất key của database
    this.users = this.usersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.users.forEach(user => {
      // Đẩy data vào 1 mảng để dễ xử lý
      this.dataSet.push(user);

      $(document).ready(function () {
        $('#table_user').DataTable();
        $('tbody').sortable();
        $('tbody').disableSelection();
      });
    });
  }

  ngOnInit() {

  }

  LayID(user: any) {
    this.transform.TransformData(user);
  }
}
