import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horoscope } from './horoscope';

describe('Horoscope', () => {
  let component: Horoscope;
  let fixture: ComponentFixture<Horoscope>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Horoscope]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Horoscope);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
