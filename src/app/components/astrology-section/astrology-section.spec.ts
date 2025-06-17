import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologySection } from './astrology-section';

describe('AstrologySection', () => {
  let component: AstrologySection;
  let fixture: ComponentFixture<AstrologySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrologySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
