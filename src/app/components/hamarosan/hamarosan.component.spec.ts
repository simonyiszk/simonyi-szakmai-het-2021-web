import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamarosanComponent } from './hamarosan.component';

describe('HamarosanComponent', () => {
  let component: HamarosanComponent;
  let fixture: ComponentFixture<HamarosanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamarosanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamarosanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
