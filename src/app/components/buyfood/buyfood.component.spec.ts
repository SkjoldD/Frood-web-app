import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyfoodComponent } from './buyfood.component';

describe('BuyfoodComponent', () => {
  let component: BuyfoodComponent;
  let fixture: ComponentFixture<BuyfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyfoodComponent]
    });
    fixture = TestBed.createComponent(BuyfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
