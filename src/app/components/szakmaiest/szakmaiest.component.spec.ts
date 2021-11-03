import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzakmaiestComponent } from './szakmaiest.component';

describe('SzakmaiestComponent', () => {
  let component: SzakmaiestComponent;
  let fixture: ComponentFixture<SzakmaiestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzakmaiestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzakmaiestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
