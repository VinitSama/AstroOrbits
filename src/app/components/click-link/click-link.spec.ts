import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickLink } from './click-link';

describe('ClickLink', () => {
  let component: ClickLink;
  let fixture: ComponentFixture<ClickLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
