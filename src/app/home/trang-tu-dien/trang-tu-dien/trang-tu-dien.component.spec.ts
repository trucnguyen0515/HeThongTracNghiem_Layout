import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangTuDienComponent } from './trang-tu-dien.component';

describe('TrangTuDienComponent', () => {
  let component: TrangTuDienComponent;
  let fixture: ComponentFixture<TrangTuDienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangTuDienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangTuDienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
