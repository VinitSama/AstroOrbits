import { Component, OnInit } from '@angular/core';
import { Banner } from "./banner/banner";
import { BannerMenu } from "./banner-menu/banner-menu";
import { ZodiacPrediction } from "../zodiac-prediction/zodiac-prediction";
import { AstrologySection } from "../astrology-section/astrology-section";
import { BlogSection } from "../blog-section/blog-section";
import { MetricSection } from "../metric-section/metric-section";
import { WhyAstrologySection } from "../why-astrology-section/why-astrology-section";
import { ISvgColors } from '../../interfaces/isvg-link';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [
    Banner,
    BannerMenu,
    ZodiacPrediction,
    AstrologySection,
    BlogSection,
    MetricSection,
    WhyAstrologySection,
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  svgColor!: ISvgColors;
  zodiacPredictionTitle = "Today's Astrology Prediction";
  blogSectionHeading = "Blogs";

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
