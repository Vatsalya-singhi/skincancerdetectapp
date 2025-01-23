import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionPlotComponent } from './distribution-plot.component';

describe('DistributionPlotComponent', () => {
  let component: DistributionPlotComponent;
  let fixture: ComponentFixture<DistributionPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
