import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarot } from './tarot';

describe('Tarot', () => {
  let component: Tarot;
  let fixture: ComponentFixture<Tarot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
