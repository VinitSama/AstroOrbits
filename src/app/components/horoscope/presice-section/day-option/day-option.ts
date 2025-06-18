import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day-option',
  imports: [
    CommonModule,
  ],
  templateUrl: './day-option.html',
  styleUrl: './day-option.css'
})
export class DayOption {

  @Input() dayOptions!: string[];
  @Input() selectedOption: string = '';

  @Output() daySelectEmitter = new EventEmitter<string>();

  optionSelect(option: string) {
    this.daySelectEmitter.emit(option);
  }

}
