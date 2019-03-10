import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamNhanNguoiDungComponent } from './cam-nhan-nguoi-dung.component';

describe('CamNhanNguoiDungComponent', () => {
  let component: CamNhanNguoiDungComponent;
  let fixture: ComponentFixture<CamNhanNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamNhanNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamNhanNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
