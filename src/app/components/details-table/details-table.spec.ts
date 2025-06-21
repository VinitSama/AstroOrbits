import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTable } from './details-table';

describe('DetailsTable', () => {
  let component: DetailsTable;
  let fixture: ComponentFixture<DetailsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
