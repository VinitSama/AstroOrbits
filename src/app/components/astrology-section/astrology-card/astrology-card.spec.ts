import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyCard } from './astrology-card';

describe('AstrologyCard', () => {
  let component: AstrologyCard;
  let fixture: ComponentFixture<AstrologyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrologyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
