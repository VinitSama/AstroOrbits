import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotResult } from './tarot-result';

describe('TarotResult', () => {
  let component: TarotResult;
  let fixture: ComponentFixture<TarotResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
