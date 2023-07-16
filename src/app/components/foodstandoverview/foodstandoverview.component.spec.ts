import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstandoverviewComponent } from './foodstandoverview.component';

describe('FoodstandoverviewComponent', () => {
  let component: FoodstandoverviewComponent;
  let fixture: ComponentFixture<FoodstandoverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodstandoverviewComponent]
    });
    fixture = TestBed.createComponent(FoodstandoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
