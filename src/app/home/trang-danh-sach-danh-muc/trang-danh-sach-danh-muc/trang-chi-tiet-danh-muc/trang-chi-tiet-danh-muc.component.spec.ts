import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChiTietDanhMucComponent } from './trang-chi-tiet-danh-muc.component';

describe('TrangChiTietDanhMucComponent', () => {
  let component: TrangChiTietDanhMucComponent;
  let fixture: ComponentFixture<TrangChiTietDanhMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangChiTietDanhMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangChiTietDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
