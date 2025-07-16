import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBanner } from './new-banner';

describe('NewBanner', () => {
  let component: NewBanner;
  let fixture: ComponentFixture<NewBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
