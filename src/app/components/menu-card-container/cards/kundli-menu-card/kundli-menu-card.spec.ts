import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliMenuCard } from './kundli-menu-card';

describe('KundliMenuCard', () => {
  let component: KundliMenuCard;
  let fixture: ComponentFixture<KundliMenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliMenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliMenuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
