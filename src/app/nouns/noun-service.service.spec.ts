import { TestBed } from '@angular/core/testing';

import { NounServiceService } from './noun-service.service';

describe('NounServiceService', () => {
  let service: NounServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NounServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
