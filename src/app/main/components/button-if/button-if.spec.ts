import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIf } from './button-if';

describe('ButtonIf', () => {
  let component: ButtonIf;
  let fixture: ComponentFixture<ButtonIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
