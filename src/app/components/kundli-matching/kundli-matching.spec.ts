import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliMatching } from './kundli-matching';

describe('KundliMatching', () => {
  let component: KundliMatching;
  let fixture: ComponentFixture<KundliMatching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliMatching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliMatching);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
