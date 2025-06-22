import { Component, Input } from '@angular/core';
import { IKundliDetail } from '../../interfaces/ikundli-detail';
import { CommonModule } from '@angular/common';
import { IMantraDetails } from '../../interfaces/imantra-details';

@Component({
  selector: 'app-details-table',
  imports: [
    CommonModule
  ],
  templateUrl: './details-table.html',
  styleUrl: './details-table.css'
})
export class DetailsTable {

  @Input() heading!: String;
  @Input() detailTable!: IKundliDetail[];
  @Input() columns: number = 2;

  get groupedDetails(): IKundliDetail[][] {
    const grouped: IKundliDetail[][] = [];
    for (let i = 0; i < this.detailTable.length; i += this.columns) {
      grouped.push(this.detailTable.slice(i, i + this.columns));
    }
    return grouped;
  }

}
