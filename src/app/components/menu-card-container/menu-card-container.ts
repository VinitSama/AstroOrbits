import { Component, Input} from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { SectionTag } from '../section-tag/section-tag';
import { KundliMenuCard } from "./cards/kundli-menu-card/kundli-menu-card";
import { HoroscopeMenuCard } from "./cards/horoscope-menu-card/horoscope-menu-card";
import { LoveMenuCard } from "./cards/love-menu-card/love-menu-card";
import { PanchangMenuCard } from "./cards/panchang-menu-card/panchang-menu-card";
import { TarotMenuCard } from "./cards/tarot-menu-card/tarot-menu-card";

@Component({
  selector: 'app-menu-card-container',
  imports: [
    SectionTag,
    KundliMenuCard,
    HoroscopeMenuCard,
    LoveMenuCard,
    PanchangMenuCard,
    TarotMenuCard
],
  templateUrl: './menu-card-container.html',
  styleUrl: './menu-card-container.css'
})
export class MenuCardContainer{
  
  @Input() svgColor!: ISvgColors;

}
