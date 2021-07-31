import { TestBed } from '@angular/core/testing';

import { UpiserviceService } from './upiservice.service';

describe('UpiserviceService', () => {
  let service: UpiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
