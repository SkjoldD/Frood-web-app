import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstandComponent } from './foodstand.component';

describe('FoodstandComponent', () => {
  let component: FoodstandComponent;
  let fixture: ComponentFixture<FoodstandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodstandComponent]
    });
    fixture = TestBed.createComponent(FoodstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
