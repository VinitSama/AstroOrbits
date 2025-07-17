import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudrakshSection } from './rudraksh-section';

describe('RudrakshSection', () => {
  let component: RudrakshSection;
  let fixture: ComponentFixture<RudrakshSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RudrakshSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RudrakshSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
