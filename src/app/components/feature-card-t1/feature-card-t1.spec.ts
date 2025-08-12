import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardT1 } from './feature-card-t1';

describe('FeatureCardT1', () => {
  let component: FeatureCardT1;
  let fixture: ComponentFixture<FeatureCardT1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCardT1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCardT1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
