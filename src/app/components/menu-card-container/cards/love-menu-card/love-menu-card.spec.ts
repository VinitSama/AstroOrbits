import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveMenuCard } from './love-menu-card';

describe('LoveMenuCard', () => {
  let component: LoveMenuCard;
  let fixture: ComponentFixture<LoveMenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveMenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveMenuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
