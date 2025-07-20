import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopePersonalise } from './horoscope-personalise';

describe('HoroscopePersonalise', () => {
  let component: HoroscopePersonalise;
  let fixture: ComponentFixture<HoroscopePersonalise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoroscopePersonalise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscopePersonalise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
