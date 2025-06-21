import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vastushastra } from './vastushastra';

describe('Vastushastra', () => {
  let component: Vastushastra;
  let fixture: ComponentFixture<Vastushastra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vastushastra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vastushastra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
