import { TestBed } from '@angular/core/testing';

import { ProductgrowntypeserviceService } from './productgrowntypeservice.service';

describe('ProductgrowntypeserviceService', () => {
  let service: ProductgrowntypeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductgrowntypeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
