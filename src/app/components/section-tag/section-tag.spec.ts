import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTag } from './section-tag';

describe('SectionTag', () => {
  let component: SectionTag;
  let fixture: ComponentFixture<SectionTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
