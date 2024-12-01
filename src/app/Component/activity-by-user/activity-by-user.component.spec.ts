import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityByUserComponent } from './activity-by-user.component';

describe('ActivityByUserComponent', () => {
  let component: ActivityByUserComponent;
  let fixture: ComponentFixture<ActivityByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityByUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
