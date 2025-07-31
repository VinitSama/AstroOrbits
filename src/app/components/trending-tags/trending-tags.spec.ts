import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTags } from './trending-tags';

describe('TrendingTags', () => {
  let component: TrendingTags;
  let fixture: ComponentFixture<TrendingTags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingTags]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
