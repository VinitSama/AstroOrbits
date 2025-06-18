import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeReport } from './horoscope-report';

describe('HoroscopeReport', () => {
  let component: HoroscopeReport;
  let fixture: ComponentFixture<HoroscopeReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoroscopeReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscopeReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
