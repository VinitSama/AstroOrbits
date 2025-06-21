import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { IPanchangTable } from '../../../interfaces/ipanchang-table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panchang-table',
  imports: [
    CommonModule,
  ],
  templateUrl: './panchang-table.html',
  styleUrl: './panchang-table.css'
})
export class PanchangTable{

  @Input() svgColor!: ISvgColors;
  @Input() table!: IPanchangTable;
  @Output() showTodayEmitter = new EventEmitter<boolean>();

  panchangDate: Date = new Date();

  changeDate(day: number) {
    const newDate = new Date(this.panchangDate);
    newDate.setDate(this.panchangDate.getDate() + day);
    this.panchangDate = newDate;
    this.showTodayEmitter.emit(this.ispanchangDateToday());
  }

  ispanchangDateToday() {
    const today: Date = new Date();
    return (
      today.getFullYear() === this.panchangDate.getFullYear() &&
      today.getMonth() === this.panchangDate.getMonth() &&
      today.getDate() === this.panchangDate.getDate()
    );
  }
  
  location() {
    console.log("location");
  }

  formatDateTime(dateStr: string): string {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return dateStr;
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day}/${month}/${year} | ${hours}:${minutes} ${ampm}`;
  }

}
