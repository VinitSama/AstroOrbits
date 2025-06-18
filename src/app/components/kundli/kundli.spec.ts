import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kundli } from './kundli';

describe('Kundli', () => {
  let component: Kundli;
  let fixture: ComponentFixture<Kundli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kundli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kundli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
