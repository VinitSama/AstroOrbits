import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingResult } from './matching-result';

describe('MatchingResult', () => {
  let component: MatchingResult;
  let fixture: ComponentFixture<MatchingResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
