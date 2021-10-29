import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzulinapComponent } from './szulinap.component';

describe('SzulinapComponent', () => {
  let component: SzulinapComponent;
  let fixture: ComponentFixture<SzulinapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzulinapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzulinapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
