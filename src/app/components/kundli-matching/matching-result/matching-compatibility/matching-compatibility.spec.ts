import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingCompatibility } from './matching-compatibility';

describe('MatchingCompatibility', () => {
  let component: MatchingCompatibility;
  let fixture: ComponentFixture<MatchingCompatibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingCompatibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingCompatibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
