import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliChart } from './kundli-chart';

describe('KundliChart', () => {
  let component: KundliChart;
  let fixture: ComponentFixture<KundliChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
