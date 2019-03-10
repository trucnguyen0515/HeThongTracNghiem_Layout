import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonResponsiveMenuComponent } from './button-responsive-menu.component';

describe('ButtonResponsiveMenuComponent', () => {
  let component: ButtonResponsiveMenuComponent;
  let fixture: ComponentFixture<ButtonResponsiveMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonResponsiveMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonResponsiveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
