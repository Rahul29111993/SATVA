import { TestBed } from '@angular/core/testing';

import { ConsumertransactionService } from './consumertransaction.service';

describe('ConsumertransactionService', () => {
  let service: ConsumertransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumertransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
