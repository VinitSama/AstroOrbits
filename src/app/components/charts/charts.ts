import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';

@Component({
  selector: 'app-charts',
  imports: [
    CommonModule
  ],
  templateUrl: './charts.html',
  styleUrl: './charts.css'
})
export class Charts {
  
  @Input() svgColor!: ISvgColors;

  selectedOption: "lagna" | "more" = "lagna";

  chooseOption(option: "lagna" | "more") {
    this.selectedOption = option;
  }

}
