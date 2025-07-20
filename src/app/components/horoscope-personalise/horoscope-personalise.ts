import { Component, Input } from '@angular/core';
import { IPersonalisedHoroscope } from '../../interfaces/ipersonalised-horoscope';
import { CommonModule } from '@angular/common';
import { SectionTag } from "../section-tag/section-tag";

@Component({
  selector: 'app-horoscope-personalise',
  imports: [
    CommonModule, 
    SectionTag
  ],
  templateUrl: './horoscope-personalise.html',
  styleUrl: './horoscope-personalise.css'
})
export class HoroscopePersonalise {
  @Input() horoscope!: IPersonalisedHoroscope[];
}
