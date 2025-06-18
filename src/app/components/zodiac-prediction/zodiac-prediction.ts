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
  @Input() title!: string;
  @Input() brief: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  zodiacCards!: IZodiacCard[];

  constructor(private zodiacService: ZodiacServices) {}

  ngOnInit(): void {
    this.loadCards();
  }

  private loadCards(){
    this.zodiacCards = this.zodiacService.getAllCards();
  }

}
