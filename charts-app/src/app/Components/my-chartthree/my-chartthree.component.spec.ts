import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartthreeComponent } from './my-chartthree.component';

describe('MyChartthreeComponent', () => {
  let component: MyChartthreeComponent;
  let fixture: ComponentFixture<MyChartthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChartthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
