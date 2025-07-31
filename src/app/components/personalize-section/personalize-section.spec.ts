import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizeSection } from './personalize-section';

describe('PersonalizeSection', () => {
  let component: PersonalizeSection;
  let fixture: ComponentFixture<PersonalizeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
