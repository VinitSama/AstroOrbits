import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQCard } from './faq-card';

describe('FAQCard', () => {
  let component: FAQCard;
  let fixture: ComponentFixture<FAQCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
