import { Component, Input, OnInit } from '@angular/core';
import { IZodiacCard } from '../../interfaces/izodiac-card';
import { ISvgColors } from '../../interfaces/isvg-link';
import { CommonModule } from '@angular/common';
import { ZodiacCard } from './zodiac-card/zodiac-card';
import { SectionTag } from '../section-tag/section-tag';
import { ZodiacServices } from '../../services/zodiac.services';

@Component({
  selector: 'app-zodiac-prediction',
  imports: [
    CommonModule,
    ZodiacCard,
    SectionTag,
  ],
  templateUrl: './zodiac-prediction.html',
  styleUrl: './zodiac-prediction.css'
})
export class ZodiacPrediction implements OnInit {

  @Input() svgColor!: ISvgColors;
  @Input() detailed: boolean = false;
  @Input() title: string = "";
  @Input() day: string = 'Today';
  @Input() showSectionTag: boolean = true;

  zodiacCards!: IZodiacCard[];

  constructor(private zodiacService: ZodiacServices) {}

  ngOnInit(): void {
    this.loadCards();
  }

  private loadCards(){
    this.zodiacCards = this.zodiacService.getAllCards();
  }

}
