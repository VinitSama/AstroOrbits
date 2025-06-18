import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonSign } from './moon-sign';

describe('MoonSign', () => {
  let component: MoonSign;
  let fixture: ComponentFixture<MoonSign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonSign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonSign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
