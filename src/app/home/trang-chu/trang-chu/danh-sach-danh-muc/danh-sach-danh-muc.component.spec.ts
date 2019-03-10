import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDanhMucComponent } from './danh-sach-danh-muc.component';

describe('DanhSachDanhMucComponent', () => {
  let component: DanhSachDanhMucComponent;
  let fixture: ComponentFixture<DanhSachDanhMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDanhMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
