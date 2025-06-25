import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotReading } from './tarot-reading';

describe('TarotReading', () => {
  let component: TarotReading;
  let fixture: ComponentFixture<TarotReading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotReading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotReading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
