import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricSection } from './metric-section';

describe('MetricSection', () => {
  let component: MetricSection;
  let fixture: ComponentFixture<MetricSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
