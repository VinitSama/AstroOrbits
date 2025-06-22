import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraSpecific } from './mantra-specific';

describe('MantraSpecific', () => {
  let component: MantraSpecific;
  let fixture: ComponentFixture<MantraSpecific>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantraSpecific]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantraSpecific);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
