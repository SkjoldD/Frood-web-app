import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoodstandComponent } from './editfoodstand.component';

describe('EditfoodstandComponent', () => {
  let component: EditfoodstandComponent;
  let fixture: ComponentFixture<EditfoodstandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfoodstandComponent]
    });
    fixture = TestBed.createComponent(EditfoodstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
