import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsByYearComponent } from './actions-by-year.component';

describe('ActionsByYearComponent', () => {
  let component: ActionsByYearComponent;
  let fixture: ComponentFixture<ActionsByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsByYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
