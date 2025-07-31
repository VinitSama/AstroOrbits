import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerlogyCard } from './numerlogy-card';

describe('NumerlogyCard', () => {
  let component: NumerlogyCard;
  let fixture: ComponentFixture<NumerlogyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumerlogyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerlogyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
