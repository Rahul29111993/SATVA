import { TestBed } from '@angular/core/testing';

import { UpdatetransactionService } from './updatetransaction.service';

describe('UpdatetransactionService', () => {
  let service: UpdatetransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatetransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
