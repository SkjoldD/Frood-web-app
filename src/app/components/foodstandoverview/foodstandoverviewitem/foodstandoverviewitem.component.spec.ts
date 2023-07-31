import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstandoverviewitemComponent } from './foodstandoverviewitem.component';

describe('FoodstandoverviewitemComponent', () => {
  let component: FoodstandoverviewitemComponent;
  let fixture: ComponentFixture<FoodstandoverviewitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodstandoverviewitemComponent]
    });
    fixture = TestBed.createComponent(FoodstandoverviewitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
