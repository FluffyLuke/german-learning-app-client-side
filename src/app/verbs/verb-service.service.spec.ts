import { TestBed } from '@angular/core/testing';

import { VerbServiceService } from './verb-service.service';

describe('VerbServiceService', () => {
  let service: VerbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
