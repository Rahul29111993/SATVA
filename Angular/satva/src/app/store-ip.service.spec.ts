import { TestBed } from '@angular/core/testing';

import { StoreIpService } from './store-ip.service';

describe('StoreIpService', () => {
  let service: StoreIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
