import { TestBed } from '@angular/core/testing';

import { LocationmasterService } from './locationmaster.service';

describe('LocationmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationmasterService = TestBed.get(LocationmasterService);
    expect(service).toBeTruthy();
  });
});
