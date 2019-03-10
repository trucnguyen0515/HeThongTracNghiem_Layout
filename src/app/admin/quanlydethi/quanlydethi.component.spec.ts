import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydethiComponent } from './quanlydethi.component';

describe('QuanlydethiComponent', () => {
  let component: QuanlydethiComponent;
  let fixture: ComponentFixture<QuanlydethiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlydethiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
