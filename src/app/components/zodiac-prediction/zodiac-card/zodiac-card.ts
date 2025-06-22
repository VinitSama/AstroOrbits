import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IZodiacCard } from '../../../interfaces/izodiac-card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zodiac-card',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './zodiac-card.html',
  styleUrl: './zodiac-card.css'
})
export class ZodiacCard {

  @Input() zodiacCard!: IZodiacCard;
  @Input() svgColor!: ISvgColors;
  @Input() detailed: boolean = false;

  safeSvg!: SafeHtml;

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.changeSvgColor();
  }

  changeSvgColor() {
    if (!this.zodiacCard.svg){
      return;
    }
    let targets: Array<'primary' | 'secondary' | 'tertiary' | 'stroke'> = ['primary','secondary', 'tertiary' , 'stroke']
    targets.forEach(t => {
      this.zodiacCard.svg = this.zodiacCard.svg?.replace(new RegExp(t,"g"),this.svgColor[t]) || '';
    });
    this.safeTransformSvg()
  }

  safeTransformSvg() {
    if (this.zodiacCard.svg) {
      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.zodiacCard.svg);
    }
  }
  
}
