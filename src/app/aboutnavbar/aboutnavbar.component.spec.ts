import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutnavbarComponent } from './aboutnavbar.component';

describe('AboutnavbarComponent', () => {
  let component: AboutnavbarComponent;
  let fixture: ComponentFixture<AboutnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
