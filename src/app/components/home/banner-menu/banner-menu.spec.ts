import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMenu } from './banner-menu';

describe('BannerMenu', () => {
  let component: BannerMenu;
  let fixture: ComponentFixture<BannerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
