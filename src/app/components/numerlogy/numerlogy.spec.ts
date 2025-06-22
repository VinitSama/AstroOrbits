import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numerlogy } from './numerlogy';

describe('Numerlogy', () => {
  let component: Numerlogy;
  let fixture: ComponentFixture<Numerlogy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numerlogy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Numerlogy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
