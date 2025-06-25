import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotPopup } from './tarot-popup';

describe('TarotPopup', () => {
  let component: TarotPopup;
  let fixture: ComponentFixture<TarotPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
