import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NganhangcauhoiComponent } from './nganhangcauhoi.component';

describe('NganhangcauhoiComponent', () => {
  let component: NganhangcauhoiComponent;
  let fixture: ComponentFixture<NganhangcauhoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NganhangcauhoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NganhangcauhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
