import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsByDayComponent } from './actions-by-day.component';

describe('ActionsByDayComponent', () => {
  let component: ActionsByDayComponent;
  let fixture: ComponentFixture<ActionsByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsByDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
