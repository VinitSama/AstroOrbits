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
  @Input() subHeading: string = "Choose your path to clarity. Get Detailed reports or join live community sessions.";
  @Input() subHeadCol: boolean = false;
}
