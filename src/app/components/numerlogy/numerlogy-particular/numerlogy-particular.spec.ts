import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerlogyParticular } from './numerlogy-particular';

describe('NumerlogyParticular', () => {
  let component: NumerlogyParticular;
  let fixture: ComponentFixture<NumerlogyParticular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumerlogyParticular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerlogyParticular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
