import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhSuaUserComponent } from './chinh-sua-user.component';

describe('ChinhSuaUserComponent', () => {
  let component: ChinhSuaUserComponent;
  let fixture: ComponentFixture<ChinhSuaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhSuaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhSuaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
