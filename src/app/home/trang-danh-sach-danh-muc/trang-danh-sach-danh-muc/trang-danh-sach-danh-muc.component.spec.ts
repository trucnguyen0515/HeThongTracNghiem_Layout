import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangDanhSachDanhMucComponent } from './trang-danh-sach-danh-muc.component';

describe('TrangDanhSachDanhMucComponent', () => {
  let component: TrangDanhSachDanhMucComponent;
  let fixture: ComponentFixture<TrangDanhSachDanhMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangDanhSachDanhMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangDanhSachDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
