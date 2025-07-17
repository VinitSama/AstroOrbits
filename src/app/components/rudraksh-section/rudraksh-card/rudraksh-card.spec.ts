import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudrakshCard } from './rudraksh-card';

describe('RudrakshCard', () => {
  let component: RudrakshCard;
  let fixture: ComponentFixture<RudrakshCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RudrakshCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RudrakshCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
