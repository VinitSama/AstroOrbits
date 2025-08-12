import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardT2 } from './feature-card-t2';

describe('FeatureCardT2', () => {
  let component: FeatureCardT2;
  let fixture: ComponentFixture<FeatureCardT2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCardT2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCardT2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
