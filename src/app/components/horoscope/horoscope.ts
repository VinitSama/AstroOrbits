import { Component, OnInit } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { ZodiacPrediction } from "../zodiac-prediction/zodiac-prediction";
import { HeaderService } from '../../services/header.service';
import { SectionTag } from "../section-tag/section-tag";
import { THoroscopeSign } from '../../types/thoroscope-sign';
import { ClickLink } from "../click-link/click-link";
import { CommonModule } from '@angular/common';
import { RudrakshSection } from "../rudraksh-section/rudraksh-section";
import { BlogSection } from "../blog-section/blog-section";
import { AstrologySection } from "../astrology-section/astrology-section";
import { AboutSection } from "../about-section/about-section";
import { FAQSection } from "../faq-section/faq-section";
import { KundliMenuCard } from "../menu-card-container/cards/kundli-menu-card/kundli-menu-card";
import { NumerologyMenuCard } from "../menu-card-container/cards/numerology-menu-card/numerology-menu-card";
import { TarotMenuCard } from "../menu-card-container/cards/tarot-menu-card/tarot-menu-card";
import { LoveMenuCard } from "../menu-card-container/cards/love-menu-card/love-menu-card";
import { IInsightCard } from '../../interfaces/iinsight-card';
import { AstrologicalInsightCard } from "../astrological-insight-card/astrological-insight-card";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ITrendingContainer } from '../../interfaces/itrending-tag';
import { TrendingTags } from "../trending-tags/trending-tags";
import { IPersonalisedContainer } from '../../interfaces/ipersonalised-container';
import { PersonalizeSection } from "../personalize-section/personalize-section";
import { SeoService, WEP_ADD } from '../../services/seo.service';
import { FormService } from '../../services/form.service';
import { TZodiacSign } from '../../types/tzodiac-sign';
import { IAboutCard } from '../../interfaces/iabout-card';
import { IFAQCard } from '../../interfaces/ifaq-card';
import { horoscopeCareerAboutCard, horoscopeDailyAboutCard, horoscopeFinanceAboutCard, horoscopeHealthAboutCard, horoscopeHealthFaqCard, horoscopeLandingAbout, horoscopeLandingFaqCard, horoscopeLoveAboutCard, horoscopeMonthlyAboutCard, horoscopeWeeklyAboutCard, horoscopeWeeklyFaqCard } from './horoscope-about';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-horoscope',
  imports: [
    ZodiacPrediction,
    SectionTag,
    ClickLink,
    CommonModule,
    RudrakshSection,
    BlogSection,
    AstrologySection,
    AboutSection,
    FAQSection,
    KundliMenuCard,
    NumerologyMenuCard,
    TarotMenuCard,
    LoveMenuCard,
    AstrologicalInsightCard,
    TrendingTags,
    PersonalizeSection
],
  templateUrl: './horoscope.html',
  styleUrl: './horoscope.css'
})
export class Horoscope implements OnInit {

  svgColor!: ISvgColors;
  zodiacSectionTtitle = 'Horoscope';
  zodiacSectionBrief = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  blogSectionHeading = "A Spot to start your learning";
  showDetails: boolean = false;
  selectedType: 'Love' | 'Health' | 'Career' | 'Finance' | null = null;
  thisYear: string = '2025'
  selectedDay: string = "";
  selectedBrief: string = "";
  selectedZodiac: TZodiacSign | null = null;
  selectedSign: THoroscopeSign = "moon";
  trendingTags: ITrendingContainer = 
  {
    heading: "Trending near you",
    tags: [
      { name: "Sagittarius", number: 16.26 },
      { name: "Libra", number: 22.38 },
      { name: "Sagittarius", number: 16.26 },
      { name: "Sagittarius", number: 16.26 },
      { name: "Sagittarius", number: 16.26 }
    ],
    showPercentage: true,
    checkMore: false,
  };
  daySelector: {
    name: string;
    brief: string;
  }[] = [
    {
      name: "Daily",
      brief: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Weekly",
      brief: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Monthly",
      brief: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Yearly",
      brief: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];
  horoscopeType: IPersonalisedContainer = {
    heading: "Get your Personalised Horoscope",
    subHeading: "",
    cards: [
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
  };
  insightCard: IInsightCard[] = [
    {
      name: "Mars Transit Impact",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      button: "Learn how it affects you",
      svgName: "mars",
    },
    {
      name: "Mercury Retrograde Guide",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      button: "Learn how it affects you",
      svgName: "mercury",
    },
    {
      name: "Full Moon Manifestation",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      button: "Learn how it affects you",
      svgName: "moon",
    },
  ];
  aboutCard!: IAboutCard;
  faqCards!: IFAQCard[];
  constructor(private themeService: ThemeService, private headerService: HeaderService, private route: ActivatedRoute, private router: Router, private seo: SeoService, private formService: FormService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.selectedZodiac = this.formService.getZodiacSign();
    this.loadSVGColor();
    this.headerService.setColorSubject(false);
    this.headerService.setNavSubject('Horoscope');
    this.route.url.subscribe(() => {
      this.loadFromRouteIfNeeded(this.route.snapshot);
    });
    this.setThisYear();
    this.aboutCardSetter();
  }

  private aboutCardSetter() {
    if (this.selectedType) {
      switch (this.selectedType) {
        case 'Love':
          this.aboutCard = horoscopeLoveAboutCard;
          break;
        case 'Finance':
          this.aboutCard = horoscopeFinanceAboutCard;
          break;
        case 'Career':
          this.aboutCard = horoscopeCareerAboutCard;
          break;
        case 'Health':
          this.aboutCard = horoscopeHealthAboutCard;
          break;
      }
    } else if (this.selectedDay) {
      switch (this.selectedDay) {
        case 'Daily':
          this.aboutCard = horoscopeDailyAboutCard;
          break;
        case 'Weekly':
          this.aboutCard = horoscopeWeeklyAboutCard;
          break;
        case 'Monthly':
          this.aboutCard = horoscopeMonthlyAboutCard;
          break;
        default:
          this.aboutCard = horoscopeLandingAbout;
      }
    } else {
      this.aboutCard = horoscopeLandingAbout;
    }
  }

  private faqSetter() {
    if (this.selectedType == 'Health'){
      this.faqCards = horoscopeHealthFaqCard;
    }
    else if (this.selectedDay){
      switch (this.selectedDay){
        // case 'Daily':
        //   this.faqCards = horoscopeLandingFaqCard;
        //   break;
        case 'Weekly':
          this.faqCards = horoscopeWeeklyFaqCard;
          break;
        default:
          this.faqCards = horoscopeLandingFaqCard;
      }
    } else {
      this.faqCards = horoscopeLandingFaqCard;
    }
  }


  
  private getWeekRange(date: Date = new Date()): string {
    const day = date.getDay();
    let start = new Date(date);
    start.setDate(date.getDate() - day);
    let end = new Date(date);
    end.setDate(date.getDate() + (6 - day));
    return `${this.formatDate(start)} to ${this.formatDate(end)}`;
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  }

  private setThisYear() {
    this.thisYear =  new Date().getFullYear().toString();
    this.daySelector[3].name = `Yearly - ${this.thisYear}`;
  }

  private loadFromRouteIfNeeded(route: ActivatedRouteSnapshot) {
    const currentPath = route.routeConfig?.path ?? '';
    const parentPath = route.parent?.routeConfig?.path ?? '';

    let selectedName = '';
    let brief = '';

    // --- Detect type safely ---
    const possibleTypes: Array<'Love' | 'Health' | 'Career' | 'Finance'> = [
      'Love',
      'Health',
      'Career',
      'Finance',
    ];

    const matchType = (path: string): typeof this.selectedType =>
      possibleTypes.find(t => t.toLowerCase() === path.toLowerCase()) ?? null;

    this.selectedType = matchType(parentPath) || matchType(currentPath);

    // --- Detect day ---
    if (['daily', 'weekly', 'monthly'].includes(currentPath.toLowerCase())) {
      selectedName =
        currentPath.charAt(0).toUpperCase() + currentPath.slice(1).toLowerCase();
      brief =
        this.daySelector.find(
          d => d.name.toLowerCase() === selectedName.toLowerCase()
        )?.brief || '';
    } else if (currentPath.startsWith('Yearly')) {
      const parts = currentPath.split('/');
      const year = parts.length > 1 ? parts[1] : this.thisYear;
      selectedName = `Yearly - ${year}`;
      brief = this.daySelector[3].brief || '';
    }

    // --- Apply values ---
    if (this.selectedType) {
      this.zodiacSectionTtitle = `${this.selectedType} Horoscope`;
      this.showDetails = true;
      if (selectedName){
        this.selectedDay = selectedName;
        this.selectedBrief = brief;
      } else {
        this.selectedBrief = '';
        //run api
      }
    }
    else if (selectedName) {
      this.selectedDay = selectedName;
      this.showDetails = true;
      this.zodiacSectionTtitle = `${selectedName} Horoscope`;
      this.selectedBrief = brief;
    } else {
      this.selectedDay = '';
      this.showDetails = false;
      this.zodiacSectionTtitle = 'Horoscope';
      this.selectedBrief = '';
      this.formService.setZodiacSign(null);
      this.selectedZodiac = null;
    }
    this.seoSeter();
    this.aboutCardSetter();
    this.faqSetter();
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }


  changeSign(sign: THoroscopeSign){
    this.selectedSign = sign;
  }
  
  onDaySelect(day: string) {
    if (!day.includes('Yearly')){
      if (this.selectedType != null ){
        this.router.navigate(['horoscope', this.selectedType, day]);
      } else{
        this.router.navigate(['horoscope', day]);
      }
    } else if(this.selectedType != null){
      this.router.navigate(['horoscope', this.selectedType, 'yearly', this.thisYear]);
    } else {
      this.router.navigate(['horoscope', 'yearly', this.thisYear]);
    }
    this.smoothScrolling();
  }

  private smoothScrolling():void {
    const element = document.getElementById('header-logo');

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

    seoSeter() {
    if(!this.selectedZodiac) {
      if (!this.selectedType) {
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Horoscope for ${todayDate}: Fresh Zodiac Predictions Updated Every Day`,
            description: `Your updated daily horoscope for ${todayDate} —get authentic zodiac predictions for all signs. Our expert astrologers refresh these horoscopes every day for timely guidance on love, career, and more!`,
            ogTitle: `Daily Horoscope for ${todayDate}: Fresh Zodiac Predictions Updated Every Day`,
            ogDescription: `Your updated daily horoscope for ${todayDate}—get authentic zodiac predictions for all signs. Our expert astrologers refresh these horoscopes every day for timely guidance on love, career, and more!`,
            keywords: `daily horoscope, ${todayDate} horoscope, today horoscope, daily astrology, zodiac signs, astrology updates, fresh predictions`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Weekly Horoscope for ${weekRange}: Latest Astrology Insights`,
            description: `Discover your weekly horoscope for ${weekRange}, featuring newly-updated astrological guidance for every sign. Our horoscopes are refreshed each week to keep you aligned with the stars.`,
            ogTitle: `Weekly Horoscope for ${weekRange}: Latest Astrology Insights`,
            ogDescription: `Discover your weekly horoscope for ${weekRange}, featuring newly-updated astrological guidance for every sign. Our horoscopes are refreshed each week to keep you aligned with the stars.`,
            keywords: `weekly horoscope, horoscopes this week, ${weekRange} horoscope, weekly astrology, zodiac signs, astrology updates, fresh predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Horoscope for ${month} ${this.thisYear}: In-Depth Zodiac Forecasts Updated Monthly`,
            description: `Explore your monthly horoscope for ${month} ${this.thisYear}. Find insightful astrology forecasts for every zodiac sign—freshly updated every month for authentic and timely predictions.`,
            ogTitle: `Monthly Horoscope for ${month} ${this.thisYear}: In-Depth Zodiac Forecasts Updated Monthly`,
            ogDescription: `Explore your monthly horoscope for ${month} ${this.thisYear}. Find insightful astrology forecasts for every zodiac sign—freshly updated every month for authentic and timely predictions.`,
            keywords: `monthly horoscope, ${month} horoscope, monthly astrology, zodiac signs, astrology updates, monthly predictions`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Horoscope for ${this.thisYear}: Annual Zodiac Predictions and Guidance`,
            description: `Check your yearly horoscope for ${this.thisYear}! Comprehensive and freshly updated zodiac insights for the year ahead—covering love, career, health, and more. New predictions added each year.`,
            ogTitle: `Yearly Horoscope for ${this.thisYear}: Annual Zodiac Predictions and Guidance`,
            ogDescription: `Check your yearly horoscope for ${this.thisYear}! Comprehensive and freshly updated zodiac insights for the year ahead—covering love, career, health, and more. New predictions added each year.`,
            keywords: `yearly horoscope, ${this.thisYear} horoscope, annual astrology, zodiac predictions, astrology updates, annual forecast`,
          })
        } else {
          this.seo.updateTags({
            title: 'Horoscope & Zodiac Signs: Comprehensive Astrology Predictions for All Signs',
            description: 'Explore your horoscope and discover in-depth zodiac predictions for every sign. Get insights on love, career, health, and personality traits—expert-written, authentic astrology guidance for all.',
            keywords: "horoscope, zodiac signs, astrology, horoscope predictions, astrology signs, birth chart, horoscope compatibility, astrology guidance, horoscope reading, star signs, sun sign, moon sign, expert astrologers",
            ogTitle: "Horoscope & Zodiac Signs | Authentic Astrology for Al",
            ogDescription: "Comprehensive astrology predictions for all zodiac signs. Explore love, career, health, and more with real astrologers.",
            ogUrl: `${WEP_ADD}horoscope`,
          });
        }
      } else{
        if (this.selectedType == 'Love'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Love Horoscope for All Signs - ${todayDate} | Expert Relationships Insights`,
            description: `Get your daily love horoscope for All Signs on ${todayDate}. Expert astrology guidance on romance, relationships and compatibility refreshed every day.`,
            ogTitle: `Daily Love Horoscope for All Signs - ${todayDate}"`,
            ogDescription: `Accurate daily love horoscope with expert insights for All Signs. Updated daily for fresh romantic guidance.`,
            keywords: `daily love horoscope, love horoscope today, romance astrology, relationships guidance, zodiac love predictions`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Weekly Love Horoscope for All Signs - ${weekRange} | Relationships Astrology`,
            description: `Discover your weekly love horoscope for All Signs from ${weekRange}. Fresh astrological insights for your relationships updated weekly.`,
            ogTitle: `Weekly Love Horoscope for All Signs - ${weekRange}`,
            ogDescription: `Expert weekly love horoscope with updated relationships guidance for All Signs. Stay aligned with the stars this week.`,
            keywords: `weekly love horoscope, love horoscope this week, romance astrology weekly, relationships predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Love Horoscope for All Signs - ${month} ${this.thisYear} | Zodiac Relationships Forecast`,
            description: `Explore your monthly love horoscope for All Signs in ${month} ${this.thisYear}. Expert relationships astrology predictions updated monthly for lasting love.`,
            ogTitle: `Monthly Love Horoscope for All Signs - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly love horoscope for All Signs with fresh astrological relationships insights. Updated monthly.`,
            keywords: `monthly love horoscope, love horoscope this month, romance astrology monthly, relationships forecasts`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Love Horoscope for All Signs - ${this.thisYear} | Annual Romance Predictions`,
            description: `Check your yearly love horoscope for All Signs in ${this.thisYear}. Comprehensive astrological guidance on romance and relationships, refreshed annually.`,
            ogTitle: `Yearly Love Horoscope for All Signs - ${this.thisYear}`,
            ogDescription: `Detailed yearly love horoscope with expert romantic forecasts for All Signs. Updated yearly to reflect new astrological trends.`,
            keywords: `yearly love horoscope, love horoscope this year, romance astrology yearly, relationships predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Love Horoscope for All Signs | Astrology Insights for Your relationships`,
            description: 'Get accurate love horoscopes and relationship guidance from expert astrologers. Updated regularly to reflect the latest astrological trends.',
          });
        }
      } else if (this.selectedType == 'Finance'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Finance Horoscope for All Signs - ${todayDate} | Wealth & Money Astrology`,
            description: `Get your daily finance horoscope for All Signs on ${todayDate}. Expert astrological insights for wealth, money, and financial growth updated daily.`,
            ogTitle: `Daily Finance Horoscope for All Signs - ${todayDate}`,
            ogDescription: `Accurate daily finance horoscope with fresh money and wealth predictions for All Signs. Updated every day.`,
            keywords: `daily finance horoscope, money horoscope today, wealth astrology, financial guidance, zodiac finance predictions`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Weekly Finance Horoscope for All Signs - ${weekRange} | Wealth & Money Insights`,
            description: `"Discover your weekly finance horoscope for All Signs from ${weekRange}. Updated weekly with expert predictions for money and wealth.`,
            ogTitle: `Weekly Finance Horoscope for All Signs - ${weekRange}`,
            ogDescription: `Expert weekly finance horoscope with fresh astrological insights on money and wealth for All Signs. Updated weekly.`,
            keywords: `weekly finance horoscope, money horoscope this week, financial astrology weekly, wealth predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Finance Horoscope for All Signs - ${month} ${this.thisYear} | Wealth & Financial Forecast`,
            description: `"Explore your monthly finance horoscope for All Signs in ${month} ${this.thisYear}. Updated monthly with detailed predictions on wealth and finances.`,
            ogTitle: `Monthly Finance Horoscope for All Signs - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly finance horoscope with fresh astrological insights on wealth and money for All Signs. Updated monthly.`,
            keywords: `monthly finance horoscope, money horoscope this month, financial astrology monthly, wealth forecasts`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Finance Horoscope for All Signs - ${this.thisYear} | Annual Wealth Predictions`,
            description: `Check your yearly finance horoscope for All Signs in ${this.thisYear}. Comprehensive wealth and financial forecasts refreshed annually.`,
            ogTitle: `Yearly Finance Horoscope for All Signs - ${this.thisYear}`,
            ogDescription: `Detailed yearly finance horoscope with expert wealth predictions for All Signs. Updated yearly for latest astrological trends.`,
            keywords: `yearly finance horoscope, money horoscope this year, financial astrology yearly, wealth predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Finance Horoscope for All Signs | Wealth & Money Astrology Predictions`,
            description: 'Stay ahead with expert finance horoscope predictions for wealth and money management. Regularly updated to provide fresh astrological guidance.',
          });
        }
      } else if (this.selectedType == 'Career'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Career Horoscope for All Signs - ${todayDate} | Job & Success Astrology`,
            description: `Get your daily career horoscope for All Signs on ${todayDate}. Expert job and success astrology insights updated daily for your growth.`,
            ogTitle: `Daily Career Horoscope for All Signs - ${todayDate}`,
            ogDescription: `Accurate daily career horoscope with expert astrology insights for All Signs. Updated every day for career growth.`,
            keywords: `daily career horoscope, job horoscope today, career astrology, success guidance, zodiac job predictions`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Career Horoscope for All Signs - ${weekRange} | Job & Growth Astrology`,
            description: `Discover your weekly career horoscope for All Signs from ${weekRange}. Fresh expert predictions for jobs and career growth updated weekly.`,
            ogTitle: `Weekly Career Horoscope for All Signs - ${weekRange}`,
            ogDescription: `Expert weekly career horoscope with updated job and career growth insights for All Signs. Updated weekly.`,
            keywords: `weekly career horoscope, job horoscope this week, career astrology weekly, job growth predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Career Horoscope for All Signs - ${month} ${this.thisYear} | Job & Success Forecast`,
            description: `Explore your monthly career horoscope for All Signs in ${month} ${this.thisYear}. Detailed astrology forecasts on job, career, and success updated monthly.`,
            ogTitle: `Monthly Career Horoscope for All Signs - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly career horoscope with fresh astrology insights for jobs and success for All Signs. Updated monthly.`,
            keywords: `monthly career horoscope, job horoscope this month, career astrology monthly, job success predictions`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Career Horoscope for All Signs - ${this.thisYear} | Annual Job Predictions`,
            description: `Check your yearly career horoscope for All Signs in ${this.thisYear}. Comprehensive astrology insights for jobs and career success refreshed annually.`,
            ogTitle: `Yearly Career Horoscope for All Signs - ${this.thisYear}`,
            ogDescription: `Detailed yearly career horoscope featuring expert astrology forecasts for job growth for All Signs. Updated yearly.`,
            keywords: `yearly career horoscope, job horoscope this year, career astrology yearly, job predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Career Horoscope for All Signs | Expert Astrology for Job & Growth`,
            description: 'Stay ahead with expert finance horoscope predictions for wealth and money management. Regularly updated to provide fresh astrological guidance.',
          });
        }
      } else if (this.selectedType == 'Health'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Health Horoscope for All Signs - ${todayDate} | Wellness Astrology`,
            description: `Get your daily health horoscope for All Signs on ${todayDate}. Expert wellness and vitality insights updated daily for your health.`,
            ogTitle: `Daily Health Horoscope for All Signs - ${todayDate}`,
            ogDescription: `Accurate daily health horoscope with expert wellness astrology for All Signs. Updated every day.`,
            keywords: `daily health horoscope, wellness horoscope today, health astrology, fitness predictions, zodiac health insights`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Health Horoscope for All Signs - ${weekRange} | Wellness & Vitality Insights`,
            description: `Discover your weekly health horoscope for All Signs from ${weekRange}. Fresh astrology guidance on wellness and vitality updated weekly.`,
            ogTitle: `Weekly Health Horoscope for All Signs - ${weekRange}`,
            ogDescription: `Expert weekly health horoscope with fresh wellness and vitality astrology insights for All Signs. Updated weekly.`,
            keywords: `weekly health horoscope, wellness horoscope this week, health astrology weekly, vitality predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Health Horoscope for All Signs - ${month} ${this.thisYear} | Wellness & Vitality Forecast`,
            description: `Explore your monthly health horoscope for All Signs in ${month} ${this.thisYear}. Detailed astrology insights on wellness and vitality updated monthly.`,
            ogTitle: `Monthly Health Horoscope for All Signs - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly health horoscope with expert wellness astrology for All Signs. Updated monthly.`,
            keywords: `monthly health horoscope, wellness horoscope this month, health astrology monthly, vitality forecasts`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Health Horoscope for All Signs - ${this.thisYear} | Annual Wellness Predictions`,
            description: `Check your yearly health horoscope for All Signs in ${this.thisYear}. Comprehensive astrology forecasts on wellness and vitality refreshed annually.`,
            ogTitle: `Yearly Health Horoscope for All Signs - ${this.thisYear}`,
            ogDescription: `Detailed yearly health horoscope with expert astrology wellness forecasts for All Signs. Updated yearly.`,
            keywords: `yearly health horoscope, wellness horoscope this year, health astrology yearly, vitality predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Health Horoscope for All Signs | Astrological Wellness & Vitality Insights`,
            description: 'Stay informed with health horoscope predictions from expert astrologers. Regularly updated for the latest astrological wellness guidance.',
          });
        }
      } else {
        this.seo.updateTags({
          title: 'Horoscope & Zodiac Signs: Comprehensive Astrology Predictions for All Signs',
          description: 'Explore your horoscope and discover in-depth zodiac predictions for every sign. Get insights on love, career, health, and personality traits—expert-written, authentic astrology guidance for all.',
          keywords: "horoscope, zodiac signs, astrology, horoscope predictions, astrology signs, birth chart, horoscope compatibility, astrology guidance, horoscope reading, star signs, sun sign, moon sign, expert astrologers",
          ogTitle: "Horoscope & Zodiac Signs | Authentic Astrology for Al",
          ogDescription: "Comprehensive astrology predictions for all zodiac signs. Explore love, career, health, and more with real astrologers.",
          ogUrl: `${WEP_ADD}horoscope`,
        });
      }
      }
    } else if (!this.selectedType){
      if (this.selectedDay == "Daily") {
        const todayDate = `${new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year:"numeric"
        })}`;
        this.seo.updateTags({
          title: `Daily ${this.selectedZodiac} Horoscope for ${todayDate} | Expert Zodiac Predictions`,
          description: `Get your daily ${this.selectedZodiac} horoscope for ${todayDate}. Authentic, expert-written astrology insights on love, career, health, and more—all freshly updated daily.`,
          ogTitle: `Daily ${this.selectedZodiac} Horoscope for ${todayDate}`,
          ogDescription: `Accurate daily ${this.selectedZodiac} horoscope by expert astrologers. Stay updated with fresh insights for ${todayDate}.`,
          keywords: `daily ${this.selectedZodiac} horoscope, ${this.selectedZodiac} horoscope today, zodiac ${this.selectedZodiac} predictions, astrology daily, authentic horoscope`
        })
      } else if (this.selectedDay == "Weekly") {
        const weekRange = this.getWeekRange();
        this.seo.updateTags({
          title: `Weekly ${this.selectedZodiac} Horoscope for ${weekRange} | Latest Zodiac Insights`,
          description: `Explore your weekly ${this.selectedZodiac} horoscope for ${weekRange}. Fresh astrological guidance updated weekly to help you navigate love, career, health, and more.`,
          ogTitle: `Weekly ${this.selectedZodiac} Horoscope for ${weekRange}`,
          ogDescription: `Latest weekly ${this.selectedZodiac} horoscope with expert guidance. Stay ahead of the stars for ${weekRange}.`,
          keywords: `weekly ${this.selectedZodiac} horoscope, ${this.selectedZodiac} horoscope this week, weekly zodiac predictions, astrology forecast`,
        })
      } else if (this.selectedDay == 'Monthly') {
        const month = new Date().toLocaleDateString("en-US", { month: "long" });
        this.seo.updateTags({
          title: `Monthly ${this.selectedZodiac} Horoscope for ${month} ${this.thisYear} | In-Depth Zodiac Forecast`,
          description: `Discover your monthly horoscope for ${this.selectedZodiac} for ${month} ${this.thisYear}. Expert astrology insights updated monthly for love, career, health, and more.`,
          ogTitle: `Monthly ${this.selectedZodiac} Horoscope for ${month} ${this.thisYear}`,
          ogDescription: `In-depth, expert monthly ${this.selectedZodiac} horoscope for ${month} ${this.thisYear}. Stay tuned with fresh astrological predictions.`,
          keywords: `monthly ${this.selectedZodiac} horoscope, ${month} ${this.thisYear} horoscope, astrology monthly, zodiac forecasts`,
        })
      } else if (this.selectedDay.includes('Yearly')){
        this.seo.updateTags({
          title: `Yearly ${this.selectedZodiac} Horoscope for ${this.thisYear} | Annual Zodiac Predictions`,
          description: `Check your yearly horoscope for ${this.selectedZodiac} for ${this.thisYear}. Comprehensive zodiac insights on love, career, and personal growth refreshed every year.`,
          ogTitle: `Yearly ${this.selectedZodiac} Horoscope for ${this.thisYear}`,
          ogDescription: `Comprehensive yearly ${this.selectedZodiac} horoscope predictions for ${this.thisYear} from expert astrologers.`,
          keywords: `yearly ${this.selectedZodiac} horoscope, ${this.thisYear} horoscope, annual astrology, zodiac yearly forecast`,
        })
      } else {
        this.seo.updateTags({
          title: 'Horoscope & Zodiac Signs: Comprehensive Astrology Predictions for All Signs',
          description: 'Explore your horoscope and discover in-depth zodiac predictions for every sign. Get insights on love, career, health, and personality traits—expert-written, authentic astrology guidance for all.',
          keywords: "horoscope, zodiac signs, astrology, horoscope predictions, astrology signs, birth chart, horoscope compatibility, astrology guidance, horoscope reading, star signs, sun sign, moon sign, expert astrologers",
          ogTitle: "Horoscope & Zodiac Signs | Authentic Astrology for Al",
          ogDescription: "Comprehensive astrology predictions for all zodiac signs. Explore love, career, health, and more with real astrologers.",
          ogUrl: `${WEP_ADD}horoscope`,
        });
      }
    } else {
      if (this.selectedType == 'Love'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Love Horoscope for ${this.selectedZodiac} - ${todayDate} | Expert Relationships Insights`,
            description: `Get your daily love horoscope for ${this.selectedZodiac} on ${todayDate}. Expert astrology guidance on romance, relationships and compatibility refreshed every day.`,
            ogTitle: `Daily Love Horoscope for ${this.selectedZodiac} - ${todayDate}"`,
            ogDescription: `Accurate daily love horoscope with expert insights for ${this.selectedZodiac}. Updated daily for fresh romantic guidance.`,
            keywords: `daily love horoscope, love horoscope today, romance astrology, relationships guidance, zodiac love predictions`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Weekly Love Horoscope for ${this.selectedZodiac} - ${weekRange} | Relationships Astrology`,
            description: `Discover your weekly love horoscope for ${this.selectedZodiac} from ${weekRange}. Fresh astrological insights for your relationships updated weekly.`,
            ogTitle: `Weekly Love Horoscope for ${this.selectedZodiac} - ${weekRange}`,
            ogDescription: `Expert weekly love horoscope with updated relationships guidance for ${this.selectedZodiac}. Stay aligned with the stars this week.`,
            keywords: `weekly love horoscope, love horoscope this week, romance astrology weekly, relationships predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Love Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear} | Zodiac Relationships Forecast`,
            description: `Explore your monthly love horoscope for ${this.selectedZodiac} in ${month} ${this.thisYear}. Expert relationships astrology predictions updated monthly for lasting love.`,
            ogTitle: `Monthly Love Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly love horoscope for ${this.selectedZodiac} with fresh astrological relationships insights. Updated monthly.`,
            keywords: `monthly love horoscope, love horoscope this month, romance astrology monthly, relationships forecasts`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Love Horoscope for ${this.selectedZodiac} - ${this.thisYear} | Annual Romance Predictions`,
            description: `Check your yearly love horoscope for ${this.selectedZodiac} in ${this.thisYear}. Comprehensive astrological guidance on romance and relationships, refreshed annually.`,
            ogTitle: `Yearly Love Horoscope for ${this.selectedZodiac} - ${this.thisYear}`,
            ogDescription: `Detailed yearly love horoscope with expert romantic forecasts for ${this.selectedZodiac}. Updated yearly to reflect new astrological trends.`,
            keywords: `yearly love horoscope, love horoscope this year, romance astrology yearly, relationships predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Love Horoscope for ${this.selectedZodiac} | Astrology Insights for Your relationships`,
            description: 'Get accurate love horoscopes and relationship guidance from expert astrologers. Updated regularly to reflect the latest astrological trends.',
          });
        }
      } else if (this.selectedType == 'Finance'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Finance Horoscope for ${this.selectedZodiac} - ${todayDate} | Wealth & Money Astrology`,
            description: `Get your daily finance horoscope for ${this.selectedZodiac} on ${todayDate}. Expert astrological insights for wealth, money, and financial growth updated daily.`,
            ogTitle: `Daily Finance Horoscope for ${this.selectedZodiac} - ${todayDate}`,
            ogDescription: `Accurate daily finance horoscope with fresh money and wealth predictions for ${this.selectedZodiac}. Updated every day.`,
            keywords: `daily finance horoscope, money horoscope today, wealth astrology, financial guidance, zodiac finance predictions`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Weekly Finance Horoscope for ${this.selectedZodiac} - ${weekRange} | Wealth & Money Insights`,
            description: `"Discover your weekly finance horoscope for ${this.selectedZodiac} from ${weekRange}. Updated weekly with expert predictions for money and wealth.`,
            ogTitle: `Weekly Finance Horoscope for ${this.selectedZodiac} - ${weekRange}`,
            ogDescription: `Expert weekly finance horoscope with fresh astrological insights on money and wealth for ${this.selectedZodiac}. Updated weekly.`,
            keywords: `weekly finance horoscope, money horoscope this week, financial astrology weekly, wealth predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Finance Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear} | Wealth & Financial Forecast`,
            description: `"Explore your monthly finance horoscope for ${this.selectedZodiac} in ${month} ${this.thisYear}. Updated monthly with detailed predictions on wealth and finances.`,
            ogTitle: `Monthly Finance Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly finance horoscope with fresh astrological insights on wealth and money for ${this.selectedZodiac}. Updated monthly.`,
            keywords: `monthly finance horoscope, money horoscope this month, financial astrology monthly, wealth forecasts`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Finance Horoscope for ${this.selectedZodiac} - ${this.thisYear} | Annual Wealth Predictions`,
            description: `Check your yearly finance horoscope for ${this.selectedZodiac} in ${this.thisYear}. Comprehensive wealth and financial forecasts refreshed annually.`,
            ogTitle: `Yearly Finance Horoscope for ${this.selectedZodiac} - ${this.thisYear}`,
            ogDescription: `Detailed yearly finance horoscope with expert wealth predictions for ${this.selectedZodiac}. Updated yearly for latest astrological trends.`,
            keywords: `yearly finance horoscope, money horoscope this year, financial astrology yearly, wealth predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Finance Horoscope for ${this.selectedZodiac} | Wealth & Money Astrology Predictions`,
            description: 'Stay ahead with expert finance horoscope predictions for wealth and money management. Regularly updated to provide fresh astrological guidance.',
          });
        }
      } else if (this.selectedType == 'Career'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Career Horoscope for ${this.selectedZodiac} - ${todayDate} | Job & Success Astrology`,
            description: `Get your daily career horoscope for ${this.selectedZodiac} on ${todayDate}. Expert job and success astrology insights updated daily for your growth.`,
            ogTitle: `Daily Career Horoscope for ${this.selectedZodiac} - ${todayDate}`,
            ogDescription: `Accurate daily career horoscope with expert astrology insights for ${this.selectedZodiac}. Updated every day for career growth.`,
            keywords: `daily career horoscope, job horoscope today, career astrology, success guidance, zodiac job predictions`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Career Horoscope for ${this.selectedZodiac} - ${weekRange} | Job & Growth Astrology`,
            description: `Discover your weekly career horoscope for ${this.selectedZodiac} from ${weekRange}. Fresh expert predictions for jobs and career growth updated weekly.`,
            ogTitle: `Weekly Career Horoscope for ${this.selectedZodiac} - ${weekRange}`,
            ogDescription: `Expert weekly career horoscope with updated job and career growth insights for ${this.selectedZodiac}. Updated weekly.`,
            keywords: `weekly career horoscope, job horoscope this week, career astrology weekly, job growth predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Career Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear} | Job & Success Forecast`,
            description: `Explore your monthly career horoscope for ${this.selectedZodiac} in ${month} ${this.thisYear}. Detailed astrology forecasts on job, career, and success updated monthly.`,
            ogTitle: `Monthly Career Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly career horoscope with fresh astrology insights for jobs and success for ${this.selectedZodiac}. Updated monthly.`,
            keywords: `monthly career horoscope, job horoscope this month, career astrology monthly, job success predictions`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Career Horoscope for ${this.selectedZodiac} - ${this.thisYear} | Annual Job Predictions`,
            description: `Check your yearly career horoscope for ${this.selectedZodiac} in ${this.thisYear}. Comprehensive astrology insights for jobs and career success refreshed annually.`,
            ogTitle: `Yearly Career Horoscope for ${this.selectedZodiac} - ${this.thisYear}`,
            ogDescription: `Detailed yearly career horoscope featuring expert astrology forecasts for job growth for ${this.selectedZodiac}. Updated yearly.`,
            keywords: `yearly career horoscope, job horoscope this year, career astrology yearly, job predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Career Horoscope for ${this.selectedZodiac} | Expert Astrology for Job & Growth`,
            description: 'Stay ahead with expert finance horoscope predictions for wealth and money management. Regularly updated to provide fresh astrological guidance.',
          });
        }
      } else if (this.selectedType == 'Health'){
        if (this.selectedDay == "Daily") {
          const todayDate = `${new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year:"numeric"
          })}`;
          this.seo.updateTags({
            title: `Daily Health Horoscope for ${this.selectedZodiac} - ${todayDate} | Wellness Astrology`,
            description: `Get your daily health horoscope for ${this.selectedZodiac} on ${todayDate}. Expert wellness and vitality insights updated daily for your health.`,
            ogTitle: `Daily Health Horoscope for ${this.selectedZodiac} - ${todayDate}`,
            ogDescription: `Accurate daily health horoscope with expert wellness astrology for ${this.selectedZodiac}. Updated every day.`,
            keywords: `daily health horoscope, wellness horoscope today, health astrology, fitness predictions, zodiac health insights`
          })
        } else if (this.selectedDay == "Weekly") {
          const weekRange = this.getWeekRange();
          this.seo.updateTags({
            title: `Health Horoscope for ${this.selectedZodiac} - ${weekRange} | Wellness & Vitality Insights`,
            description: `Discover your weekly health horoscope for ${this.selectedZodiac} from ${weekRange}. Fresh astrology guidance on wellness and vitality updated weekly.`,
            ogTitle: `Weekly Health Horoscope for ${this.selectedZodiac} - ${weekRange}`,
            ogDescription: `Expert weekly health horoscope with fresh wellness and vitality astrology insights for ${this.selectedZodiac}. Updated weekly.`,
            keywords: `weekly health horoscope, wellness horoscope this week, health astrology weekly, vitality predictions`,
          })
        } else if (this.selectedDay == 'Monthly') {
          const month = new Date().toLocaleDateString("en-US", { month: "long" });
          this.seo.updateTags({
            title: `Monthly Health Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear} | Wellness & Vitality Forecast`,
            description: `Explore your monthly health horoscope for ${this.selectedZodiac} in ${month} ${this.thisYear}. Detailed astrology insights on wellness and vitality updated monthly.`,
            ogTitle: `Monthly Health Horoscope for ${this.selectedZodiac} - ${month} ${this.thisYear}`,
            ogDescription: `In-depth monthly health horoscope with expert wellness astrology for ${this.selectedZodiac}. Updated monthly.`,
            keywords: `monthly health horoscope, wellness horoscope this month, health astrology monthly, vitality forecasts`,
          })
        } else if (this.selectedDay.includes('Yearly')){
          this.seo.updateTags({
            title: `Yearly Health Horoscope for ${this.selectedZodiac} - ${this.thisYear} | Annual Wellness Predictions`,
            description: `Check your yearly health horoscope for ${this.selectedZodiac} in ${this.thisYear}. Comprehensive astrology forecasts on wellness and vitality refreshed annually.`,
            ogTitle: `Yearly Health Horoscope for ${this.selectedZodiac} - ${this.thisYear}`,
            ogDescription: `Detailed yearly health horoscope with expert astrology wellness forecasts for ${this.selectedZodiac}. Updated yearly.`,
            keywords: `yearly health horoscope, wellness horoscope this year, health astrology yearly, vitality predictions`,
          })
        } else {
          this.seo.updateTags({
            title: `Health Horoscope for ${this.selectedZodiac} | Astrological Wellness & Vitality Insights`,
            description: 'Stay informed with health horoscope predictions from expert astrologers. Regularly updated for the latest astrological wellness guidance.',
          });
        }
      } else {
        this.seo.updateTags({
          title: 'Horoscope & Zodiac Signs: Comprehensive Astrology Predictions for All Signs',
          description: 'Explore your horoscope and discover in-depth zodiac predictions for every sign. Get insights on love, career, health, and personality traits—expert-written, authentic astrology guidance for all.',
          keywords: "horoscope, zodiac signs, astrology, horoscope predictions, astrology signs, birth chart, horoscope compatibility, astrology guidance, horoscope reading, star signs, sun sign, moon sign, expert astrologers",
          ogTitle: "Horoscope & Zodiac Signs | Authentic Astrology for Al",
          ogDescription: "Comprehensive astrology predictions for all zodiac signs. Explore love, career, health, and more with real astrologers.",
          ogUrl: `${WEP_ADD}horoscope`,
        });
      }
    }
  }

}
