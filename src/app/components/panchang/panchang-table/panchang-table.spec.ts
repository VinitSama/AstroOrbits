import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchangTable } from './panchang-table';

describe('PanchangTable', () => {
  let component: PanchangTable;
  let fixture: ComponentFixture<PanchangTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanchangTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanchangTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
