import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstandProductGrownItemComponent } from './foodstand-product-grown-item.component';

describe('FoodstandProductGrownItemComponent', () => {
  let component: FoodstandProductGrownItemComponent;
  let fixture: ComponentFixture<FoodstandProductGrownItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodstandProductGrownItemComponent]
    });
    fixture = TestBed.createComponent(FoodstandProductGrownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
