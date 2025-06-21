import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveCalculator } from './love-calculator';

describe('LoveCalculator', () => {
  let component: LoveCalculator;
  let fixture: ComponentFixture<LoveCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
