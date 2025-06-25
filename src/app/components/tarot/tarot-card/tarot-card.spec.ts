import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotCard } from './tarot-card';

describe('TarotCard', () => {
  let component: TarotCard;
  let fixture: ComponentFixture<TarotCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
