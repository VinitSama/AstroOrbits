import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { ISvgColors } from '../../interfaces/isvg-link';
import { MoonSignForm } from "./moon-sign-form/moon-sign-form";
import { ZodiacPrediction } from "../zodiac-prediction/zodiac-prediction";
import { IArticle } from '../../interfaces/iarticle';
import { Article } from "../article/article";
import { SectionTag } from "../section-tag/section-tag";
import { BlogSection } from "../blog-section/blog-section";
import { CommonModule } from '@angular/common';
import { IMoonSignForm } from '../../interfaces/imoon-sign-form';
import { MoonSignResult } from "./moon-sign-result/moon-sign-result";

@Component({
  selector: 'app-moon-sign',
  imports: [
    MoonSignForm,
    ZodiacPrediction,
    Article,
    SectionTag,
    BlogSection,
    CommonModule,
    MoonSignResult
],
  templateUrl: './moon-sign.html',
  styleUrl: './moon-sign.css'
})
export class MoonSign {

  svgColor!: ISvgColors;

  dynamicSectionHeading: "Know Your Moon Sign" | "Your Moon Sign" = "Know Your Moon Sign";
  showForm: boolean = true;

  zodiacSectionTitle = "Moon Signs";
  zodiacSectionBrief = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  articleSectionHeading = "Moon Sign Calculator: What Is Your Moon Sign?";
  article: IArticle = {
    title: "",
    content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions. <br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope"
  }

  blogSectionHeading = "You may also like";


  private themeUpdateSubscription!: Subscription;

  
  moonSign: string = "Aries";
  moonSignReport: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  
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

  formSubmit(form: IMoonSignForm){
    console.log(form);
    this.showForm = false;
    this.dynamicSectionHeading = 'Your Moon Sign';
  }

  forNewForm() {
    this.dynamicSectionHeading = 'Know Your Moon Sign';
    this.showForm = true;
  }

  forHoroscopr(moonSign: string) {
    console.log(moonSign);
  }

}
