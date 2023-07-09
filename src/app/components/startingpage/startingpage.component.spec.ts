import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingpageComponent } from './startingpage.component';

describe('StartingpageComponent', () => {
  let component: StartingpageComponent;
  let fixture: ComponentFixture<StartingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartingpageComponent]
    });
    fixture = TestBed.createComponent(StartingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
