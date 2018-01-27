/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardChartService } from './dashboard-chart.service';

describe('DashboardChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardChartService]
    });
  });

  it('should ...', inject([DashboardChartService], (service: DashboardChartService) => {
    expect(service).toBeTruthy();
  }));
});
