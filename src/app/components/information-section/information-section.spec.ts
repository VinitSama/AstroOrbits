import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSection } from './information-section';

describe('InformationSection', () => {
  let component: InformationSection;
  let fixture: ComponentFixture<InformationSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
