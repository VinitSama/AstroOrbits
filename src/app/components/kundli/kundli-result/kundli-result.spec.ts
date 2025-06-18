import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliResult } from './kundli-result';

describe('KundliResult', () => {
  let component: KundliResult;
  let fixture: ComponentFixture<KundliResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
