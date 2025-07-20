import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchangMenuCard } from './panchang-menu-card';

describe('PanchangMenuCard', () => {
  let component: PanchangMenuCard;
  let fixture: ComponentFixture<PanchangMenuCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanchangMenuCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanchangMenuCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
