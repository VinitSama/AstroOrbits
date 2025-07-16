import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-tag',
  imports: [
    CommonModule
  ],
  templateUrl: './section-tag.html',
  styleUrl: './section-tag.css'
})
export class SectionTag {

  @Input() sectionTitle: string = '';
  @Input() svgColor!: ISvgColors;
  @Input() subHeading: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // @Input() subHeading!: string;
}
