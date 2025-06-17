import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacCard } from './zodiac-card';

describe('ZodiacCard', () => {
  let component: ZodiacCard;
  let fixture: ComponentFixture<ZodiacCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZodiacCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodiacCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
