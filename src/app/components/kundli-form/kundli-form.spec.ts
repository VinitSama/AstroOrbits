import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliForm } from './kundli-form';

describe('KundliForm', () => {
  let component: KundliForm;
  let fixture: ComponentFixture<KundliForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
