import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISvgColors } from '../../../interfaces/isvg-link';

@Component({
  selector: 'app-banner-menu',
  imports: [],
  templateUrl: './banner-menu.html',
  styleUrl: './banner-menu.css'
})
export class BannerMenu {

  @Input() svgColor!: ISvgColors;

  constructor(private router: Router) {}

  goToPage(page: 'horoscope' | 'kundli' | 'vastushastra') {
    this.router.navigate([page]);
    this.smoothScrolling();
  }

  private smoothScrolling():void {
    const element = document.getElementById('header-logo');

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

}
