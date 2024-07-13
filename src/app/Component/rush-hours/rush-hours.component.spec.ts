import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushHoursComponent } from './rush-hours.component';

describe('RushHoursComponent', () => {
  let component: RushHoursComponent;
  let fixture: ComponentFixture<RushHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RushHoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RushHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
