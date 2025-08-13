import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudrakshaReport } from './rudraksha-report';

describe('RudrakshaReport', () => {
  let component: RudrakshaReport;
  let fixture: ComponentFixture<RudrakshaReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RudrakshaReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RudrakshaReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
