import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotMenu } from './tarot-menu';

describe('TarotMenu', () => {
  let component: TarotMenu;
  let fixture: ComponentFixture<TarotMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
