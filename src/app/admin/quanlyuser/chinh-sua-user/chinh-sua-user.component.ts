import { TransformDataService } from './../../../services/transform-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFireDatabase, AngularFireList/*, FirebaseListObservable, FirebaseObjectObservable*/ } from 'angularfire2/database';

@Component({
  selector: 'app-chinh-sua-user',
  templateUrl: './chinh-sua-user.component.html',
  styleUrls: ['./chinh-sua-user.component.scss']
})
export class ChinhSuaUserComponent implements OnInit {
  public user: FormGroup;
  public usersRef: AngularFireList<any>;
  public users;
  public item;
  public key;
  constructor(private db: AngularFireDatabase, private transform: TransformDataService) {
    // Kết nối với database
    this.usersRef = db.list('/Users');
  }

  ngOnInit() {
    this.user = new FormGroup({
      'taiKhoan': new FormControl(null, Validators.required),
      'id': new FormControl(Math.floor(Math.random() * 101)),
      'matKhau': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'capDo': new FormControl(null, Validators.required),
    });

    this.transform.asData.subscribe(kq => {
      if (kq) {
        this.key =  kq;
        this.users = this.db.object('Users/' + kq).valueChanges().forEach((item) => {
          this.item = item;
          this.user = new FormGroup({
            'taiKhoan': new FormControl(this.item.taiKhoan, Validators.required),
            'id': new FormControl(this.item.id),
            'matKhau': new FormControl(this.item.matKhau, Validators.required),
            'email': new FormControl(this.item.email, Validators.required),
            'capDo': new FormControl(this.item.capDo, Validators.required),
          });
        });
      }
    });
  }

  ChinhSuaUser(user: any) {
    // Post / update dữ liệu lên database
    this.usersRef.update(this.key, user);

    (<HTMLElement>document.getElementsByClassName('alert')[0]).style.display =
      'block';
    setTimeout(() => {
      (<HTMLElement>document.getElementsByClassName('alert')[0]).style.display =
        'none';
    }, 2222);

    this.user  = user = new FormGroup({
      'taiKhoan': new FormControl(null, Validators.required),
      'id': new FormControl(Math.floor(Math.random() * 101)),
      'matKhau': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'capDo': new FormControl(null, Validators.required),
    });
  }
}
