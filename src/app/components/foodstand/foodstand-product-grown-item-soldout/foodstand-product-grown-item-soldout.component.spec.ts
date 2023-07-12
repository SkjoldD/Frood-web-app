import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstandProductGrownItemSoldoutComponent } from './foodstand-product-grown-item-soldout.component';

describe('FoodstandProductGrownItemSoldoutComponent', () => {
  let component: FoodstandProductGrownItemSoldoutComponent;
  let fixture: ComponentFixture<FoodstandProductGrownItemSoldoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodstandProductGrownItemSoldoutComponent]
    });
    fixture = TestBed.createComponent(FoodstandProductGrownItemSoldoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
