import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinikonfComponent } from './minikonf.component';

describe('MinikonfComponent', () => {
  let component: MinikonfComponent;
  let fixture: ComponentFixture<MinikonfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinikonfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinikonfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
