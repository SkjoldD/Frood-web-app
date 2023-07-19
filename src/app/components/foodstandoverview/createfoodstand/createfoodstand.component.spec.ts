import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefoodstandComponent } from './createfoodstand.component';

describe('CreatefoodstandComponent', () => {
  let component: CreatefoodstandComponent;
  let fixture: ComponentFixture<CreatefoodstandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatefoodstandComponent]
    });
    fixture = TestBed.createComponent(CreatefoodstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
