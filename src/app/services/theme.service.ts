import { Injectable } from '@angular/core';
import { ISvgColors } from '../interfaces/isvg-link';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  svgColor!: ISvgColors;

  constructor() {
    this.makeSvgColor();
  }

  getSvgColor(): ISvgColors {
    return this.svgColor
  }

  makeSvgColor() {
    this.svgColor = {
      primary: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
      secondary: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim(),
      tertiary: getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color').trim(),
      stroke: getComputedStyle(document.documentElement).getPropertyValue('--fourth-color').trim(),
    };
    console.log(this.svgColor);
  }
  
}
