import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliPrediction } from './kundli-prediction';

describe('KundliPrediction', () => {
  let component: KundliPrediction;
  let fixture: ComponentFixture<KundliPrediction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliPrediction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliPrediction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
