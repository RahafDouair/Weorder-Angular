import { TestBed } from '@angular/core/testing';

import { GraudsService } from './grauds.service';

describe('GraudsService', () => {
  let service: GraudsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraudsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
