import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  TrangThaiSideBar() {
    if ((<HTMLElement>document.querySelector('.sidenav')).style.display === 'block' ||
         (<HTMLElement>document.querySelector('.sidenav')).style.display === '') {
      (<HTMLElement>document.querySelector('.sidenav')).style.display = 'none';
      (<HTMLElement>document.querySelector('.navbar')).style.marginLeft = '0';
      (<HTMLElement>document.querySelector('.main')).style.marginLeft = '0';
    } else {
      (<HTMLElement>document.querySelector('.sidenav')).style.display = 'block';
      (<HTMLElement>document.querySelector('.navbar')).style.marginLeft = '196px';
      (<HTMLElement>document.querySelector('.main')).style.marginLeft = '196px';
    }

  }
}
