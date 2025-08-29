import { Component, effect, Input } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IZodiacCard } from '../../../interfaces/izodiac-card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResposiveService } from '../../../services/resposive.service';

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
  @Input() day: string = "Today";
  @Input() svgSize: string = '94px';
  @Input() boxSize: string = '180px';
  @Input() showName: boolean = true;
  @Input() canResize: boolean = true;

  safeSvg!: SafeHtml;
  isCircle = false;

  constructor(private sanitizer: DomSanitizer, private responsiveService: ResposiveService){}

  ngOnInit(): void {
    this.changeSvg();
  }

  sizeEffect = effect(() => {
    if (this.responsiveService.extraSmallWidth() || this.responsiveService.xxSmallWidth()) {
      if (this.canResize){
        this.svgSize = '50px';
        this.boxSize = '90px'
        this.changeSize();
      }
    } else if (this.canResize) {
      this.svgSize = '94px';
      this.boxSize = '180px'
      this.changeSize();
    }
  })

  private changeSvg() {
    if (!this.zodiacCard.svg){
      return;
    }
    let targets: Array<'primary' | 'secondary' | 'tertiary' | 'stroke'> = ['primary','secondary', 'tertiary' , 'stroke']
    targets.forEach(t => {
      this.zodiacCard.svg = this.zodiacCard.svg?.replace(new RegExp(t,"g"),this.svgColor[t]) || '';
    });
    this.changeSize()
  }

  smoothScrolling():void {
    const element = document.getElementById('header-logo');

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  private changeSize(): void {
    const svgString = this.zodiacCard.svg;
    
    const newSvgString = svgString.replace(
      /(<svg[^>]+)(height="[^"]*")/g, 
      (match, p1) => `${p1} height="${this.svgSize}"`
    );
    if (this.svgSize=='94px'){
      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(newSvgString);
      return;
    }
    const newWidth = newSvgString.replace(
      /(<svg[^>]+)(width="[^"]*")/g, 
      (match, p1) => `${p1} width="${this.svgSize}"`
    )
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(newWidth);
  }
  
}
