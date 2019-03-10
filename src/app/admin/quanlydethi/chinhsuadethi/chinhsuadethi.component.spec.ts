import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsuadethiComponent } from './chinhsuadethi.component';

describe('ChinhsuadethiComponent', () => {
  let component: ChinhsuadethiComponent;
  let fixture: ComponentFixture<ChinhsuadethiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhsuadethiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsuadethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
