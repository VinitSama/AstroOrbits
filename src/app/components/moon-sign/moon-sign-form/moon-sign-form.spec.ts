import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonSignForm } from './moon-sign-form';

describe('MoonSignForm', () => {
  let component: MoonSignForm;
  let fixture: ComponentFixture<MoonSignForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonSignForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonSignForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
