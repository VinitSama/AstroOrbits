import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionOfPlanets } from './position-of-planets';

describe('PositionOfPlanets', () => {
  let component: PositionOfPlanets;
  let fixture: ComponentFixture<PositionOfPlanets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionOfPlanets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionOfPlanets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
