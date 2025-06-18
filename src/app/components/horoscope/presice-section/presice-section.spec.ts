import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresiceSection } from './presice-section';

describe('PresiceSection', () => {
  let component: PresiceSection;
  let fixture: ComponentFixture<PresiceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresiceSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresiceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
