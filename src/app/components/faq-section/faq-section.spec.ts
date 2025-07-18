import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQSection } from './faq-section';

describe('FAQSection', () => {
  let component: FAQSection;
  let fixture: ComponentFixture<FAQSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
