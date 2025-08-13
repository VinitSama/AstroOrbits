import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudrakshaCalculator } from './rudraksha-calculator';

describe('RudrakshaCalculator', () => {
  let component: RudrakshaCalculator;
  let fixture: ComponentFixture<RudrakshaCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RudrakshaCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RudrakshaCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
