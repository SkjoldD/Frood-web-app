import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupfoodstandcontentComponent } from './popupfoodstandcontent.component';

describe('PopupfoodstandcontentComponent', () => {
  let component: PopupfoodstandcontentComponent;
  let fixture: ComponentFixture<PopupfoodstandcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupfoodstandcontentComponent]
    });
    fixture = TestBed.createComponent(PopupfoodstandcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
