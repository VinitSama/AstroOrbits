import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliDetailReport } from './kundli-detail-report';

describe('KundliDetailReport', () => {
  let component: KundliDetailReport;
  let fixture: ComponentFixture<KundliDetailReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliDetailReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliDetailReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
