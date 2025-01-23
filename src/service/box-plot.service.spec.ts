import { TestBed } from '@angular/core/testing';

import { BoxPlotService } from './box-plot.service';

describe('BoxPlotService', () => {
  let service: BoxPlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxPlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
