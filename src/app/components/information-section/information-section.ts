import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-section',
  imports: [],
  templateUrl: './information-section.html',
  styleUrl: './information-section.css'
})
export class InformationSection {
  @Input() headers: string[] = [];
  @Input() para: string[] = [];
  @Input() svgs: string[] = [];
}
