import { TestBed } from '@angular/core/testing';

import { ConsumerpaperService } from './consumerpaper.service';

describe('ConsumerpaperService', () => {
  let service: ConsumerpaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerpaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
