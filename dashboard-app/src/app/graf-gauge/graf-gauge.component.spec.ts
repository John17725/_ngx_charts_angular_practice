import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafGaugeComponent } from './graf-gauge.component';

describe('GrafGaugeComponent', () => {
  let component: GrafGaugeComponent;
  let fixture: ComponentFixture<GrafGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
