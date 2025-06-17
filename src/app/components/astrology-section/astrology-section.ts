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
  title = 'Free Astrology Services';
  astrologyCards: IAstrologyCard[] = [
    {
      title: 'Match Making',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
    {
      title: 'Panchang',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
    {
      title: 'Tarot Reading',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
    {
      title: 'Tarot Reading',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
    {
      title: 'Tarot Reading',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
    {
      title: 'Tarot Reading',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
    {
      title: 'Tarot Reading',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
    {
      title: 'Tarot Reading',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      imageUrl: '',
    },
  ]

}
