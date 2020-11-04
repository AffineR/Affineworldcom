import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwithmailComponent } from './loginwithmail.component';

describe('LoginwithmailComponent', () => {
  let component: LoginwithmailComponent;
  let fixture: ComponentFixture<LoginwithmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginwithmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginwithmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
