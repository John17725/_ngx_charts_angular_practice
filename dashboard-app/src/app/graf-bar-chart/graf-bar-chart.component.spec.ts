import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafBarChartComponent } from './graf-bar-chart.component';

describe('GrafBarChartComponent', () => {
  let component: GrafBarChartComponent;
  let fixture: ComponentFixture<GrafBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
