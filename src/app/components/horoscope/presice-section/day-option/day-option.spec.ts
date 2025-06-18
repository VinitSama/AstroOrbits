import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOption } from './day-option';

describe('DayOption', () => {
  let component: DayOption;
  let fixture: ComponentFixture<DayOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
