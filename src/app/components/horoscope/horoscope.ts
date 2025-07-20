import { Component, OnInit } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { ZodiacPrediction } from "../zodiac-prediction/zodiac-prediction";
import { IArticle } from '../../interfaces/iarticle';
import { HeaderService } from '../../services/header.service';
import { SectionTag } from "../section-tag/section-tag";
import { THoroscopeSign } from '../../types/thoroscope-sign';
import { ClickLink } from "../click-link/click-link";
import { CommonModule } from '@angular/common';
import { IPersonalisedHoroscope } from '../../interfaces/ipersonalised-horoscope';
import { HoroscopePersonalise } from "../horoscope-personalise/horoscope-personalise";
import { RudrakshSection } from "../rudraksh-section/rudraksh-section";
import { BlogSection } from "../blog-section/blog-section";
import { AstrologySection } from "../astrology-section/astrology-section";
import { ReviewSection } from "../review-section/review-section";
import { AboutSection } from "../about-section/about-section";
import { FAQSection } from "../faq-section/faq-section";

@Component({
  selector: 'app-horoscope',
  imports: [
    ZodiacPrediction,
    SectionTag,
    ClickLink,
    CommonModule,
    HoroscopePersonalise,
    RudrakshSection,
    BlogSection,
    AstrologySection,
    ReviewSection,
    AboutSection,
    FAQSection
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
  blogSectionHeading = "A Spot to start your learning";
  day = "Today";
  selectedSign: THoroscopeSign = "moon";
  trendingTags: {
    name: string;
    percent: number;
  }[] = [
    {
      name: "Sagittarius",
      percent: 16.26
    },
    {
      name: "Libra",
      percent: 22.38
    },
    {
      name: "Sagittarius",
      percent: 16.26
    },
    {
      name: "Sagittarius",
      percent: 16.26
    },
    {
      name: "Sagittarius",
      percent: 16.26
    },
  ];
  daySelector: {
    name: string;
    brief: string;
  }[] = [
    {
      name: "Daily",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Weekly",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Monthly",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Yearly - 2025",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ]
  selectedDay: string = "";
  horoscopeType: IPersonalisedHoroscope[] = [
    {
      name: "Love",
      brief: "You will be very enterprising and industrious today. You make your plans very carefully and execute them perfectly. Despite this, your progress will be very slow. However, Ganesha advises you not to despair and",
      button: "Learn how it affects you",
      svg: "love",
      buttonCol: "#FFECF2"
    },
    {
      name: "Health",
      brief: "You will be very enterprising and industrious today. You make your plans very carefully and execute them perfectly. Despite this, your progress will be very slow. However, Ganesha advises you not to despair and",
      button: "Learn how it affects you",
      svg: "health",
      buttonCol: "#F1FFEA"
    },
    {
      name: "Career",
      brief: "You will be very enterprising and industrious today. You make your plans very carefully and execute them perfectly. Despite this, your progress will be very slow. However, Ganesha advises you not to despair and",
      button: "Learn how it affects you",
      svg: "career",
      buttonCol: "#EDE7FF"
    },
    {
      name: "Finance",
      brief: "You will be very enterprising and industrious today. You make your plans very carefully and execute them perfectly. Despite this, your progress will be very slow. However, Ganesha advises you not to despair and",
      button: "Learn how it affects you",
      svg: "finance",
      buttonCol: "#E3EDFF"
    },
  ]
  constructor(private themeService: ThemeService, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.loadSVGColor();
    this.headerService.setColorSubject(false);
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  onDayChange(day: string) {
    this.day = day;
  }

  changeSign(sign: THoroscopeSign){
    this.selectedSign = sign;
  }

}
