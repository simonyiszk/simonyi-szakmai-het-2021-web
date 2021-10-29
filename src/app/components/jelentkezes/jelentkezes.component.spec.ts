import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelentkezesComponent } from './jelentkezes.component';

describe('JelentkezesComponent', () => {
  let component: JelentkezesComponent;
  let fixture: ComponentFixture<JelentkezesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JelentkezesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JelentkezesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
