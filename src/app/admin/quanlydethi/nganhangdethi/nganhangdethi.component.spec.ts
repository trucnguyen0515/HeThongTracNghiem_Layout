import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NganhangdethiComponent } from './nganhangdethi.component';

describe('NganhangdethiComponent', () => {
  let component: NganhangdethiComponent;
  let fixture: ComponentFixture<NganhangdethiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NganhangdethiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NganhangdethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
