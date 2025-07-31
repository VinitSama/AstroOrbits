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
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITrendingContainer } from '../../interfaces/itrending-tag';
import { TrendingTags } from "../trending-tags/trending-tags";
import { IPersonalisedContainer } from '../../interfaces/ipersonalised-container';
import { PersonalizeSection } from "../personalize-section/personalize-section";

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
  showDayDetails: boolean = false;
  selectedDay: string = "";
  selectedDayBrief: string = "";
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
  constructor(private themeService: ThemeService, private headerService: HeaderService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadSVGColor();
    this.headerService.setColorSubject(false);
    this.route.paramMap.subscribe(params => {
      this.loadFromRouteIfNeeded(params);
    });
  }

  private loadFromRouteIfNeeded(params: ParamMap){
    const dayParam = params.get('day');
    if (dayParam) {
      this.selectedDay = dayParam;
      this.showDayDetails = true;
      this.zodiacSectionTtitle = `${this.selectedDay} Horoscope`;
      this.selectedDayBrief = this.daySelector.find(d => d.name === this.selectedDay)?.brief || '';
    } else {
      this.selectedDay = "";
      this.showDayDetails = false;
      this.zodiacSectionTtitle = 'Horoscope';
    }
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  // onDayChange(day: string) {
  //   this.day = day;
  // }

  changeSign(sign: THoroscopeSign){
    this.selectedSign = sign;
  }

  onDaySelect(day: string) {
    this.selectedDay = day;
    console.log("Selected Day: ", this.selectedDay);
    this.router.navigate(['/home/horoscope', 'd', this.selectedDay]);
    this.smoothScrolling();
  }

  private smoothScrolling():void {
    const element = document.getElementById('header-logo');

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

}
