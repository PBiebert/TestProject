import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBehavior } from './button-behavior';

describe('ButtonBehavior', () => {
  let component: ButtonBehavior;
  let fixture: ComponentFixture<ButtonBehavior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBehavior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBehavior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
