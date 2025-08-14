import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathingCharacteristicAnalysis } from './mathing-characteristic-analysis';

describe('MathingCharacteristicAnalysis', () => {
  let component: MathingCharacteristicAnalysis;
  let fixture: ComponentFixture<MathingCharacteristicAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathingCharacteristicAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathingCharacteristicAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
