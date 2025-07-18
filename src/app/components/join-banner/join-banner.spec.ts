import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinBanner } from './join-banner';

describe('JoinBanner', () => {
  let component: JoinBanner;
  let fixture: ComponentFixture<JoinBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
