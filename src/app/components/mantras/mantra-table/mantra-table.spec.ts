import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraTable } from './mantra-table';

describe('MantraTable', () => {
  let component: MantraTable;
  let fixture: ComponentFixture<MantraTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantraTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantraTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
