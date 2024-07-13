import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppetedActionComponent } from './reppeted-action.component';

describe('ReppetedActionComponent', () => {
  let component: ReppetedActionComponent;
  let fixture: ComponentFixture<ReppetedActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReppetedActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReppetedActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
