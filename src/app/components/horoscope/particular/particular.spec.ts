import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Particular } from './particular';

describe('Particular', () => {
  let component: Particular;
  let fixture: ComponentFixture<Particular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Particular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Particular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
