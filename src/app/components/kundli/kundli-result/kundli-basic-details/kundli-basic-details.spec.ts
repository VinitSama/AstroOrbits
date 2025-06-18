import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundliBasicDetails } from './kundli-basic-details';

describe('KundliBasicDetails', () => {
  let component: KundliBasicDetails;
  let fixture: ComponentFixture<KundliBasicDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundliBasicDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundliBasicDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
