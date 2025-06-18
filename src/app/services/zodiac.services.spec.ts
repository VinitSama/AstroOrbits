import { TestBed } from '@angular/core/testing';

import { ZodiacServices } from './zodiac.services';

describe('ZodiacServices', () => {
  let service: ZodiacServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZodiacServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
