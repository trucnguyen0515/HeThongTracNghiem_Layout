import { Component, OnInit, ViewChild , Input} from '@angular/core';

@Component({
  selector: 'app-my-breadcrumb',
  templateUrl: './my-breadcrumb.component.html',
  styleUrls: ['./my-breadcrumb.component.scss']
})
export class MyBreadcrumbComponent implements OnInit {

  @ViewChild('link2_color') doom_link2;
  @ViewChild('link3_color') doom_link3;
  @ViewChild('icon') doom_icon;
  @Input('tenTrang') link2:string;
  private link3:string = "";

  constructor() { }

  ngOnInit() {
    this.check_url_current();
  }

  check_url_current = () => {
    if(!this.link3){
      this.doom_link2.nativeElement.classList.add('color_link_hientai');
      this.doom_icon.nativeElement.classList.add('hide');
    } else {
      this.doom_link2.nativeElement.classList.remove('color_link_hientai');
      this.doom_icon.nativeElement.classList.remove('hide');
    }
  }


}
