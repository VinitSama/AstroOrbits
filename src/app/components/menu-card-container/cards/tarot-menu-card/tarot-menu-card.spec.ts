import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotMenuCard } from './tarot-menu-card';

describe('TarotMenuCard', () => {
  let component: TarotMenuCard;
  let fixture: ComponentFixture<TarotMenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotMenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotMenuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
