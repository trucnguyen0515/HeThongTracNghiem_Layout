import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @ViewChild('changeColor') divNav:ElementRef;

  constructor(private router:Router,) { }

  ngOnInit() {
  }


  ChuyenTrang = (trang) => {
    console.log(trang);
    switch (trang) {
      case 'dangnhap':
        this.router.navigate(['dangnhap']);
        break;
      case 'danhsachdanhmuc':
        this.router.navigate(['danhsachdanhmuc']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }



}
