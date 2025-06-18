import { Component, Input } from '@angular/core';
import { IKundliDetail } from '../../../../../interfaces/ikundli-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-table',
  imports: [
    CommonModule,
  ],
  templateUrl: './details-table.html',
  styleUrl: './details-table.css'
})
export class DetailsTable {

  @Input() heading!: String;
  @Input() detailTable!: IKundliDetail[];

}
