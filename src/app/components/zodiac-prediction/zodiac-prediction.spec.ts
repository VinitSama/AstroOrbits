import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacPrediction } from './zodiac-prediction';

describe('ZodiacPrediction', () => {
  let component: ZodiacPrediction;
  let fixture: ComponentFixture<ZodiacPrediction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZodiacPrediction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodiacPrediction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
