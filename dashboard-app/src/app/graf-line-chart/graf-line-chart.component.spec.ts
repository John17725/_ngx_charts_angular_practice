import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafLineChartComponent } from './graf-line-chart.component';

describe('GrafLineChartComponent', () => {
  let component: GrafLineChartComponent;
  let fixture: ComponentFixture<GrafLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
