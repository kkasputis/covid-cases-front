import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CaseChartComponent } from './case-chart.component';

describe('CaseChartComponent', () => {
  let component: CaseChartComponent;
  let fixture: ComponentFixture<CaseChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
