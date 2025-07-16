import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSecond } from './banner-second';

describe('BannerSecond', () => {
  let component: BannerSecond;
  let fixture: ComponentFixture<BannerSecond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSecond]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSecond);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
