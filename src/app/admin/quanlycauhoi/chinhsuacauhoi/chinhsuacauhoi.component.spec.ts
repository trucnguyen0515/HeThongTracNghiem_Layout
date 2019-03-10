import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsuacauhoiComponent } from './chinhsuacauhoi.component';

describe('ChinhsuacauhoiComponent', () => {
  let component: ChinhsuacauhoiComponent;
  let fixture: ComponentFixture<ChinhsuacauhoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhsuacauhoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsuacauhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
