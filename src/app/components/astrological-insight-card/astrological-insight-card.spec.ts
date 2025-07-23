import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologicalInsightCard } from './astrological-insight-card';

describe('AstrologicalInsightCard', () => {
  let component: AstrologicalInsightCard;
  let fixture: ComponentFixture<AstrologicalInsightCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrologicalInsightCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologicalInsightCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
