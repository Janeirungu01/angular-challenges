import { TestBed } from '@angular/core/testing';

import { Housingservice } from './housingservice';

describe('Housingservice', () => {
  let service: Housingservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Housingservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
