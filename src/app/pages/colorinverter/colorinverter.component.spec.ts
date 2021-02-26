import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorinverterComponent } from './colorinverter.component';

describe('ColorinverterComponent', () => {
  let component: ColorinverterComponent;
  let fixture: ComponentFixture<ColorinverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorinverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorinverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
