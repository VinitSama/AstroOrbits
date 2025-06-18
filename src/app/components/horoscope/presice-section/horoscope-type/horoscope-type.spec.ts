import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeType } from './horoscope-type';

describe('HoroscopeType', () => {
  let component: HoroscopeType;
  let fixture: ComponentFixture<HoroscopeType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoroscopeType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscopeType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
