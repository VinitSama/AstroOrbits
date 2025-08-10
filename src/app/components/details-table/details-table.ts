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

  getFormattedHeading(): string {
    if (!this.heading) return '';
    return this.heading.replace(/(\d{1,2}\/\d{1,2}\/\d{4})/, (match) => {
      const [day, month, year] = match.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    });
  }

}
