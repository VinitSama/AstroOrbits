import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultProgress } from './result-progress';

describe('ResultProgress', () => {
  let component: ResultProgress;
  let fixture: ComponentFixture<ResultProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
