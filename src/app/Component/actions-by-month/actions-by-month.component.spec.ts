import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsByMonthComponent } from './actions-by-month.component';

describe('ActionsByMonthComponent', () => {
  let component: ActionsByMonthComponent;
  let fixture: ComponentFixture<ActionsByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsByMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
