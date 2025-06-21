import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingBasicDetails } from './matching-basic-details';

describe('MatchingBasicDetails', () => {
  let component: MatchingBasicDetails;
  let fixture: ComponentFixture<MatchingBasicDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingBasicDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingBasicDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
