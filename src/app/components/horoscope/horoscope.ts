import { Component, OnInit } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { ZodiacPrediction } from "../zodiac-prediction/zodiac-prediction";
import { BlogSection } from "../blog-section/blog-section";
import { PresiceSection } from "./presice-section/presice-section";
import { IArticle } from '../../interfaces/iarticle';
import { HoroscopeType } from "./presice-section/horoscope-type/horoscope-type";

@Component({
  selector: 'app-horoscope',
  imports: [
    ZodiacPrediction,
    BlogSection,
    PresiceSection,
    HoroscopeType
],
  templateUrl: './horoscope.html',
  styleUrl: './horoscope.css'
})
export class Horoscope implements OnInit {

  svgColor!: ISvgColors;
  zodiacSectionTtitle = 'Horoscope';
  zodiacSectionBrief = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  articleTitle = "What is Horoscope";
  article: IArticle = {
    title:'',
    content:"horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope"
  }
  blogSectionHeading = "Blogs";
  day = "Today";

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSVGColor();
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  onDayChange(day: string) {
    this.day = day;
  }


}
