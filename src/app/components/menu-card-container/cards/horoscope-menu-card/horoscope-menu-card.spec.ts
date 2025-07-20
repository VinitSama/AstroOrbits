import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeMenuCard } from './horoscope-menu-card';

describe('HoroscopeMenuCard', () => {
  let component: HoroscopeMenuCard;
  let fixture: ComponentFixture<HoroscopeMenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoroscopeMenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscopeMenuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
