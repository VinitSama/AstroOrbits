import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliFeatureCard } from './kundli-feature-card';

describe('KundliFeatureCard', () => {
  let component: KundliFeatureCard;
  let fixture: ComponentFixture<KundliFeatureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliFeatureCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliFeatureCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
