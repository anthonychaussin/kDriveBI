import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppetedActionTypeComponent } from './reppeted-action-type.component';

describe('ReppetedActionComponent', () => {
  let component: ReppetedActionTypeComponent;
  let fixture: ComponentFixture<ReppetedActionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReppetedActionTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReppetedActionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
