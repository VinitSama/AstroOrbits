import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingGunas } from './matching-gunas';

describe('MatchingGunas', () => {
  let component: MatchingGunas;
  let fixture: ComponentFixture<MatchingGunas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingGunas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingGunas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
