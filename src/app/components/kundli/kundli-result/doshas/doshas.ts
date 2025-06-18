import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../../../interfaces/isvg-link';

@Component({
  selector: 'app-doshas',
  imports: [
    CommonModule
  ],
  templateUrl: './doshas.html',
  styleUrl: './doshas.css'
})
export class Doshas {

  @Input() svgColor!: ISvgColors;

  selectedOption: "manglik" | "kalsarpa" | "sadhesati" | "pitra" = "manglik";

  chooseOption(option: "manglik" | "kalsarpa" | "sadhesati" | "pitra" ) {
    this.selectedOption = option;
  }

}
