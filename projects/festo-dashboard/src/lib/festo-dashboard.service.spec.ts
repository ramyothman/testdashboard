import { TestBed, inject } from '@angular/core/testing';

import { FestoDashboardService } from './festo-dashboard.service';

describe('FestoDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FestoDashboardService]
    });
  });

  it('should be created', inject([FestoDashboardService], (service: FestoDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
