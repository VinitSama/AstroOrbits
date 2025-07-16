import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardContainer } from './menu-card-container';

describe('MenuCardContainer', () => {
  let component: MenuCardContainer;
  let fixture: ComponentFixture<MenuCardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCardContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
