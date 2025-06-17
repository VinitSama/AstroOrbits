import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAstrologySection } from './why-astrology-section';

describe('WhyAstrologySection', () => {
  let component: WhyAstrologySection;
  let fixture: ComponentFixture<WhyAstrologySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyAstrologySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyAstrologySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
