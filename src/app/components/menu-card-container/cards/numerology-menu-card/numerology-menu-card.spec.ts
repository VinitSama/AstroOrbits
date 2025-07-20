import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerologyMenuCard } from './numerology-menu-card';

describe('NumerologyMenuCard', () => {
  let component: NumerologyMenuCard;
  let fixture: ComponentFixture<NumerologyMenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumerologyMenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerologyMenuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
