import { TestBed } from '@angular/core/testing';

import { CheckavailabilityService } from './checkavailability.service';

describe('CheckavailabilityService', () => {
  let service: CheckavailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckavailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
