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

  goToPage(page: 'horoscope' | 'kundli') {
    this.router.navigate(['home', page]);
  }

}
