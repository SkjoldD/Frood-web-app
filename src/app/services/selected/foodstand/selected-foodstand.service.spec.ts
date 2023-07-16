import { TestBed } from '@angular/core/testing';

import { SelectedFoodstandService } from './selected-foodstand.service';

describe('SelectedFoodstandService', () => {
  let service: SelectedFoodstandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedFoodstandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
