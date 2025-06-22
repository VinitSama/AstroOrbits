import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mantras } from './mantras';

describe('Mantras', () => {
  let component: Mantras;
  let fixture: ComponentFixture<Mantras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mantras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mantras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
