import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashaa } from './dashaa';

describe('Dashaa', () => {
  let component: Dashaa;
  let fixture: ComponentFixture<Dashaa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashaa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashaa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
