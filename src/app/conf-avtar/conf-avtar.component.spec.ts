import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfAVtarComponent } from './conf-avtar.component';

describe('ConfAVtarComponent', () => {
  let component: ConfAVtarComponent;
  let fixture: ComponentFixture<ConfAVtarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfAVtarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfAVtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
