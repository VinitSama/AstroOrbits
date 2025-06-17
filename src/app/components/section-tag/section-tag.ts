import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';

@Component({
  selector: 'app-section-tag',
  imports: [],
  templateUrl: './section-tag.html',
  styleUrl: './section-tag.css'
})
export class SectionTag {

  @Input() sectionTitle: string = '';
  @Input() svgColor!: ISvgColors;

}
