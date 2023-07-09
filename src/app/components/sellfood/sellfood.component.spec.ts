import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellfoodComponent } from './sellfood.component';

describe('SellfoodComponent', () => {
  let component: SellfoodComponent;
  let fixture: ComponentFixture<SellfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellfoodComponent]
    });
    fixture = TestBed.createComponent(SellfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
