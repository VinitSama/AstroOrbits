import { Component, OnInit } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { ZodiacPrediction } from "../zodiac-prediction/zodiac-prediction";
import { BlogSection } from "../blog-section/blog-section";

@Component({
  selector: 'app-horoscope',
  imports: [
    ZodiacPrediction,
    BlogSection,
],
  templateUrl: './horoscope.html',
  styleUrl: './horoscope.css'
})
export class Horoscope implements OnInit {

  svgColor!: ISvgColors;
  title = 'Horoscope';

  private themeUpdateSubscription!: Subscription; 

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSVGColor();
    this.themeUpdateSubscription = this.themeService.getThemeSubject().subscribe(()=>{
      this.loadSVGColor();
    })
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

}
