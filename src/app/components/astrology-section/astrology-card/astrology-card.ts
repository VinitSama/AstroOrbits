import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { IAstrologyCard } from '../../../interfaces/iastrology-card';

@Component({
  selector: 'app-astrology-card',
  imports: [],
  templateUrl: './astrology-card.html',
  styleUrl: './astrology-card.css'
})
export class AstrologyCard {

  @Input() svgColor!: ISvgColors;
  @Input() card!: IAstrologyCard;

  safeImageUrl:string = '';

  ngOnInit(): void {
    if(!this.card.imageUrl){
      this.card.imageUrl = '/images/sample-text.jpg';
    }
    this.safeImageUrl = 'url('+this.card.imageUrl+')'
  }

}
