import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCharttwoComponent } from './my-charttwo.component';

describe('MyCharttwoComponent', () => {
  let component: MyCharttwoComponent;
  let fixture: ComponentFixture<MyCharttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCharttwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCharttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
