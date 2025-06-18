import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonSignResult } from './moon-sign-result';

describe('MoonSignResult', () => {
  let component: MoonSignResult;
  let fixture: ComponentFixture<MoonSignResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonSignResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonSignResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
