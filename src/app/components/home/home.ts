import { Component, OnInit } from '@angular/core';
// import { Banner } from "./banner/banner";
// import { BannerMenu } from "./banner-menu/banner-menu";
// import { ZodiacPrediction } from "../zodiac-prediction/zodiac-prediction";
import { AstrologySection } from "../astrology-section/astrology-section";
import { BlogSection } from "../blog-section/blog-section";
// import { MetricSection } from "../metric-section/metric-section";
// import { WhyAstrologySection } from "../why-astrology-section/why-astrology-section";
import { ISvgColors } from '../../interfaces/isvg-link';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { NewBanner } from "./new-banner/new-banner";
import { BannerSecond } from "./new-banner/banner-second/banner-second";
// import { MenuCard } from "../menu-card-container/menu-card/menu-card";
import { RudrakshSection } from "../rudraksh-section/rudraksh-section";
import { ReviewSection } from "../review-section/review-section";
import { JoinBanner } from "../join-banner/join-banner";
import { FAQSection } from "../faq-section/faq-section";
import { AboutSection } from "../about-section/about-section";
import { HeaderService } from '../../services/header.service';
import { SectionTag } from "../section-tag/section-tag";
import { KundliMenuCard } from "../menu-card-container/cards/kundli-menu-card/kundli-menu-card";
import { HoroscopeMenuCard } from "../menu-card-container/cards/horoscope-menu-card/horoscope-menu-card";
import { PanchangMenuCard } from "../menu-card-container/cards/panchang-menu-card/panchang-menu-card";
import { TarotMenuCard } from "../menu-card-container/cards/tarot-menu-card/tarot-menu-card";
import { LoveMenuCard } from "../menu-card-container/cards/love-menu-card/love-menu-card";

@Component({
  selector: 'app-home',
  imports: [
    // Banner,
    // BannerMenu,
    // ZodiacPrediction,
    AstrologySection,
    BlogSection,
    // MetricSection,
    // WhyAstrologySection,
    NewBanner,
    BannerSecond,
    // MenuCard,
    RudrakshSection,
    ReviewSection,
    JoinBanner,
    FAQSection,
    AboutSection,
    SectionTag,
    KundliMenuCard,
    HoroscopeMenuCard,
    PanchangMenuCard,
    TarotMenuCard,
    LoveMenuCard
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  svgColor!: ISvgColors;
  zodiacPredictionTitle = "Today's Astrology Prediction";
  blogSectionHeading = "A Spot to start your learning";


  testsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_713_32875)">
    <path d="M28.7188 0H8.90625C7.097 0 5.625 1.47194 5.625 3.28125V6.15625C5.625 6.28056 5.67438 6.39981 5.76225 6.48769L6.36831 7.09375L5.76225 7.69981C5.67438 7.78769 5.625 7.90694 5.625 8.03125V9.90625C5.625 10.0306 5.67438 10.1498 5.76225 10.2377L6.36831 10.8438L5.76225 11.4498C5.67438 11.5377 5.625 11.6569 5.625 11.7812V26.8438C5.625 27.1026 5.83481 27.3125 6.09375 27.3125C6.35269 27.3125 6.5625 27.1026 6.5625 26.8438V11.9754L7.36275 11.1752C7.54581 10.9921 7.54581 10.6953 7.36275 10.5123L6.5625 9.71212V8.22544L7.36275 7.42525C7.54581 7.24219 7.54581 6.94537 7.36275 6.76237L6.5625 5.96212V3.28125C6.5625 1.98888 7.61387 0.9375 8.90625 0.9375H26.4255C25.8164 1.53356 25.4375 2.36381 25.4375 3.28125V23.7746L24.6373 24.5748C24.4542 24.7579 24.4542 25.0547 24.6373 25.2377L25.4375 26.0379V28.7188C25.4375 30.0111 24.3861 31.0625 23.0938 31.0625C21.8014 31.0625 20.75 30.0111 20.75 28.7188C20.75 28.4599 20.5402 28.25 20.2812 28.25H0.46875C0.209812 28.25 0 28.4599 0 28.7188C0 30.5281 1.472 32 3.28125 32H23.0938C24.903 32 26.375 30.5281 26.375 28.7188V25.8438C26.375 25.7194 26.3256 25.6002 26.2377 25.5123L25.6317 24.9062L26.2377 24.3002C26.3256 24.2123 26.375 24.0931 26.375 23.9688V3.75H31.5312C31.7902 3.75 32 3.54012 32 3.28125C32 1.47194 30.528 0 28.7188 0ZM3.28125 31.0625C2.14944 31.0625 1.20238 30.2559 0.984563 29.1875H19.8459C19.9507 29.9171 20.2964 30.5699 20.7996 31.0625H3.28125ZM26.4221 2.8125C26.6399 1.74406 27.5869 0.9375 28.7188 0.9375C29.8506 0.9375 30.7976 1.74406 31.0154 2.8125H26.4221Z" fill="#240028"/>
    <path d="M12.6875 17.4062C11.6364 17.4062 10.7812 16.5511 10.7812 15.4999C10.7812 15.2411 10.5714 15.0312 10.3125 15.0312C10.0536 15.0312 9.84375 15.2411 9.84375 15.4999C9.84375 17.068 11.1194 18.3437 12.6875 18.3437C14.2556 18.3437 15.5312 17.068 15.5312 15.4999C15.5312 14.7946 15.2767 14.1431 14.8446 13.6418C15.8594 13.5409 16.7522 12.9015 17.1671 11.9552L17.5657 11.0489C17.8697 10.3548 18.5554 9.90619 19.3125 9.90619C20.3636 9.90619 21.2188 10.7613 21.2188 11.8124V14.5624C21.2188 15.6136 20.3636 16.4687 19.3125 16.4687C18.2614 16.4687 17.4062 15.6136 17.4062 14.5624C17.4062 14.3036 17.1964 14.0937 16.9375 14.0937C16.6786 14.0937 16.4688 14.3036 16.4688 14.5624C16.4688 16.1305 17.7444 17.4062 19.3125 17.4062C20.8806 17.4062 22.1562 16.1305 22.1562 14.5624V11.8124C22.1562 10.2444 20.8806 8.96869 19.3125 8.96869C18.1831 8.96869 17.1603 9.63763 16.7073 10.6722L16.3088 11.5782C16.048 12.1729 15.5058 12.586 14.8787 12.6913C15.2896 12.1957 15.5312 11.5611 15.5312 10.8749C15.5312 9.30682 14.2556 8.03113 12.6875 8.03113C11.1194 8.03113 9.84375 9.30682 9.84375 10.8749C9.84375 11.1338 10.0536 11.3436 10.3125 11.3436C10.5714 11.3436 10.7812 11.1338 10.7812 10.8749C10.7812 9.82375 11.6364 8.96863 12.6875 8.96863C13.7386 8.96863 14.5938 9.82375 14.5938 10.8749C14.5938 11.7658 13.9884 12.5291 13.1216 12.7308C12.9094 12.7803 12.7591 12.9694 12.7591 13.1874C12.7591 13.4053 12.9093 13.5945 13.1216 13.6439C13.9884 13.8458 14.5938 14.6089 14.5938 15.4999C14.5938 16.5511 13.7386 17.4062 12.6875 17.4062Z" fill="#240028"/>
    <path d="M19.3125 6.15625C19.5714 6.15625 19.7812 5.94638 19.7812 5.6875C19.7812 5.42862 19.5714 5.21875 19.3125 5.21875C19.0536 5.21875 18.8438 5.42862 18.8438 5.6875C18.8438 5.94638 19.0536 6.15625 19.3125 6.15625Z" fill="#240028"/>
    <path d="M17.3016 6.53549C17.1186 6.71855 17.1186 7.01536 17.3016 7.19836C17.8561 7.75274 18.5842 8.02999 19.3125 8.02999C20.0407 8.02999 20.7689 7.75274 21.3234 7.19836C21.5064 7.0153 21.5064 6.71849 21.3234 6.53549C21.1402 6.35243 20.8435 6.35243 20.6604 6.53549C19.9172 7.27874 18.7078 7.27874 17.9646 6.53549C17.7815 6.35243 17.4847 6.35243 17.3016 6.53549Z" fill="#240028"/>
    <path d="M10.3125 20.2188H21.6875C21.9464 20.2188 22.1562 20.0089 22.1562 19.75C22.1562 19.4911 21.9464 19.2812 21.6875 19.2812H10.3125C10.0536 19.2812 9.84375 19.4911 9.84375 19.75C9.84375 20.0089 10.0536 20.2188 10.3125 20.2188Z" fill="#240028"/>
    <path d="M10.3125 22.0938H21.6875C21.9464 22.0938 22.1562 21.8839 22.1562 21.625C22.1562 21.3661 21.9464 21.1562 21.6875 21.1562H10.3125C10.0536 21.1562 9.84375 21.3661 9.84375 21.625C9.84375 21.8839 10.0536 22.0938 10.3125 22.0938Z" fill="#240028"/>
    <path d="M10.3125 23.9688H21.6875C21.9464 23.9688 22.1562 23.7589 22.1562 23.5C22.1562 23.2411 21.9464 23.0312 21.6875 23.0312H10.3125C10.0536 23.0312 9.84375 23.2411 9.84375 23.5C9.84375 23.7589 10.0536 23.9688 10.3125 23.9688Z" fill="#240028"/>
  </g>
  <defs>
    <clipPath id="clip0_713_32875">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

  private themeUpdateSubscription!: Subscription; 

  constructor(private themeService: ThemeService, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.loadSVGColor();
    this.headerService.setColorSubject(true);
    this.headerService.setNavSubject('Home');
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }
}
