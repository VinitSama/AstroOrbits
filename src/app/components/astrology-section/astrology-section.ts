import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { IAstrologyCard } from '../../interfaces/iastrology-card';
import { SectionTag } from "../section-tag/section-tag";
import { AstrologyCard } from "./astrology-card/astrology-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-astrology-section',
  imports: [
    SectionTag,
    AstrologyCard,
    CommonModule
  ],
  templateUrl: './astrology-section.html',
  styleUrl: './astrology-section.css'
})
export class AstrologySection {
@Input() svgColor!: ISvgColors;
  title = 'Our Free Services';
  astrologyCards: IAstrologyCard[] = [
    {
      title: 'Match Making',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/1.jpg',
    },
    {
      title: 'Panchang',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/2.jpg',
    },
    {
      title: 'Tarot Reading',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/3.jpg',
    },
    {
      title: 'Love',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/4.jpg',
    },
    {
      title: 'Vastu',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/5.jpg',
    },
    {
      title: 'Zodiac Signs',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/6.jpg',
    },
    {
      title: 'Spirituality',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/7.jpg',
    },
    {
      title: 'Planet Trasits',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      imageUrl: './images/services/8.jpg',
    },
  ]

}
