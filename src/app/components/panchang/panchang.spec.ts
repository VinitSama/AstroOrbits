import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panchang } from './panchang';

describe('Panchang', () => {
  let component: Panchang;
  let fixture: ComponentFixture<Panchang>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panchang]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panchang);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
