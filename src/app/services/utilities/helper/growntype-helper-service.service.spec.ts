import { TestBed } from '@angular/core/testing';

import { GrowntypeHelperServiceService } from './growntype-helper-service.service';

describe('GrowntypeHelperServiceService', () => {
  let service: GrowntypeHelperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowntypeHelperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
