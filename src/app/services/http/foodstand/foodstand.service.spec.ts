import { TestBed } from '@angular/core/testing';

import { FoodstandService } from './foodstand.service';

describe('FoodstandService', () => {
  let service: FoodstandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodstandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
