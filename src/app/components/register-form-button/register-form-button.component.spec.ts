import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormButtonComponent } from './register-form-button.component';

describe('RegisterFormButtonComponent', () => {
  let component: RegisterFormButtonComponent;
  let fixture: ComponentFixture<RegisterFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
