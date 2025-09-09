import { Component, computed, HostListener, Input, OnInit } from '@angular/core';
import { TZodiacSign } from '../../../types/tzodiac-sign';
import { IZodiacHoroscope } from '../../../interfaces/izodiac-horoscope';
import { IZodiacCard } from '../../../interfaces/izodiac-card';
import { ZodiacServices } from '../../../services/zodiac.services';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { SectionTag } from "../../section-tag/section-tag";
import { HeaderService } from '../../../services/header.service';
import { THoroscopeSign } from '../../../types/thoroscope-sign';
import { AstrologicalInsightCard } from "../../astrological-insight-card/astrological-insight-card";
import { IInsightCard } from '../../../interfaces/iinsight-card';
import { KundliMenuCard } from "../../menu-card-container/cards/kundli-menu-card/kundli-menu-card";
import { TarotMenuCard } from "../../menu-card-container/cards/tarot-menu-card/tarot-menu-card";
import { NumerologyMenuCard } from "../../menu-card-container/cards/numerology-menu-card/numerology-menu-card";
import { LoveMenuCard } from "../../menu-card-container/cards/love-menu-card/love-menu-card";
import { AstrologySection } from "../../astrology-section/astrology-section";
import { AboutSection } from "../../about-section/about-section";
import { FAQSection } from "../../faq-section/faq-section";
import { IPersonalisedContainer } from '../../../interfaces/ipersonalised-container';
import { PersonalizeSection } from "../../personalize-section/personalize-section";
import { HoroscopeApiService } from '../../../services/api/horoscope-api.service';
import { ResposiveService } from '../../../services/resposive.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SeoService, WEP_ADD } from '../../../services/seo.service';
import { FormService } from '../../../services/form.service';
import { IAboutCard } from '../../../interfaces/iabout-card';
import { horoscopeLandingAbout, horoscopeLandingFaqCard } from '../horoscope-about';
import { IFAQCard } from '../../../interfaces/ifaq-card';

export type TDates = "Yesterday" | "Tomorrow" | "Today" | "Weekly" | "Monthly" | "Yearly"; 

@Component({
  selector: 'app-particular',
  imports: [
    CommonModule,
    SectionTag,
    AstrologicalInsightCard,
    KundliMenuCard,
    TarotMenuCard,
    NumerologyMenuCard,
    LoveMenuCard,
    AstrologySection,
    AboutSection,
    FAQSection,
    PersonalizeSection,
    MatButtonModule,
    MatMenuModule,
],
  templateUrl: './particular.html',
  styleUrl: './particular.css'
})
export class Particular implements OnInit{

  @Input() zodiac!: TZodiacSign;
  @Input() openPrecise: number = 0;
  
  day: TDates = 'Today';
  brief: string = "Discover what the stars have in store for you today. Select your zodiac sign and unlock personalized cosmic insights.";
  svgColor!:ISvgColors;
  openSvg!: SafeHtml;
  openSvgUnSafe!: string;
  horoscope!: any;
  zodiacSign: THoroscopeSign = 'moon';

  daysOption: TDates[] = ["Today", "Tomorrow", "Yesterday", "Weekly", "Monthly", "Yearly"];
  zodiacDetails!: IZodiacCard [];

  report: IZodiacHoroscope = {
    brief: "",
    luckyInformation: {
      luckyNumber: [1],
      luckyColor: "",
    },
    stars: [0,0,0,0],  //Love, Health, Career, Finance
    particularBrief: ["", "", "", ""],
  }

  starMapper: string[] = ["Love", "Health", "Career", "Finance"];

  showPreciseHoroscope: boolean = false;
  opendPreciseIndex: number = 0;

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


  horoscopeType: IPersonalisedContainer = {
    heading: "Get your Personalised Horoscope",
    subHeading: "",
    cards: [
      {
        name: "Love",
        brief: "",
        button: "Learn how it affects you",
        svg: "love",
        buttonCol: "#FFECF2"
      },
      {
        name: "Health",
        brief: "",
        button: "Learn how it affects you",
        svg: "health",
        buttonCol: "#F1FFEA"
      },
      {
        name: "Career",
        brief: "",
        button: "Learn how it affects you",
        svg: "career",
        buttonCol: "#EDE7FF"
      },
      {
        name: "Finance",
        brief: "",
        button: "Learn how it affects you",
        svg: "finance",
        buttonCol: "#E3EDFF"
      },
    ]
  };

  dropdownOpen: boolean = false;
  aboutCard!: IAboutCard;
  faqCard!: IFAQCard[];


  constructor( private headerService: HeaderService ,private themeService: ThemeService, private zodiacService: ZodiacServices, private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private horoscopeApiService: HoroscopeApiService, private responsiveServoce: ResposiveService, private seo: SeoService, private formsService: FormService) {}
  
  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Horoscope & Zodiac Signs: Comprehensive Astrology Predictions for All Signs',
      description: 'Explore your horoscope and discover in-depth zodiac predictions for every sign. Get insights on love, career, health, and personality traits—expert-written, authentic astrology guidance for all.',
      keywords: "horoscope, zodiac signs, astrology, horoscope predictions, astrology signs, birth chart, horoscope compatibility, astrology guidance, horoscope reading, star signs, sun sign, moon sign, expert astrologers",
      ogDescription: "Comprehensive astrology predictions for all zodiac signs. Explore love, career, health, and more with real astrologers.",
      ogUrl: `${WEP_ADD}`,
    });
    this.headerService.setColorSubject(true);
    this.headerService.setNavSubject('Horoscope');
    this.loadSVGColor();
    this.loadCards();
    this.route.paramMap.subscribe(params => {
      this.loadFromRouteIfNeeded(params);
    });
    this.setOpenSvg();
    this.aboutCard = horoscopeLandingAbout;
    this.faqCard = horoscopeLandingFaqCard;
  }

  modeSelector = computed(() => {
    if (this.responsiveServoce.largeWidth() || this.responsiveServoce.extraLargeWidth() || this.responsiveServoce.xxLargeWidth()) {
      return 'large';
    } else if (this.responsiveServoce.xxSmallWidth() || this.responsiveServoce.extraSmallWidth()) {
      return 'extraSmall';
    } else {
      return 'small';
    }
  });

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-menu')) {
        this.dropdownOpen = false;
      }
  }

  horoscopeTypeMapper() {
    for (let i = 0; i<4; i++) {
      this.horoscopeType.cards[i].brief = this.report.particularBrief[i] || "";
    }
  }

  loadHoroscope() {
    this.horoscopeApiService.getHoroscopeReport(this.zodiac, this.zodiacSign, this.day).subscribe({
      next: (report) => {
        this.report = report;
        this.horoscopeTypeMapper();
      },
    });
  }

  onPrisiceChange(i: number){
    this.opendPreciseIndex = i;
    this.showPreciseHoroscope = true;
  }

  onSignClick(sign: THoroscopeSign){
    this.zodiacSign = sign;
    this.loadHoroscope();
  }

  onDayClick(day: TDates){
    this.day = day;
    this.loadHoroscope()
    this.setOpenSvg();
  }

  getSvgFile(i: number){
    const svg = '/images/horoscope-precise/' + (i+1) + '.svg';
    return svg;
  }

  daySPrint(day: string){
    if (this.daysOption.includes(day as TDates) && this.daysOption.indexOf(day as TDates) < 3){
      return true;
    }
    return false;
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  private loadCards(){
    this.zodiacDetails = this.zodiacService.getAllCards();
  }


  private loadFromRouteIfNeeded(params: ParamMap){
    const zodiacParam = params.get('zodiac');

    if (zodiacParam && this.isValidZodiac(zodiacParam)) {
      this.zodiac = zodiacParam as TZodiacSign;
      this.formsService.setZodiacSign(this.zodiac);
    } else (
      this.router.navigate(['false'])
    )
    this.setOpenSvg();
    this.loadHoroscope();
    console.log(this.horoscope);
  }

  onZodiacClick(title: TZodiacSign | null){
    this.router.navigate(['/horoscope', title]);
  }

  private sanitizeSvg(svg: string, selected: boolean = false) {
    const setColor = this.changeSvgColor(svg, selected);
    return this.sanitizer.bypassSecurityTrustHtml(setColor);
  }

  private setSize(svg: string, height: string = '40px'){
    return svg
      .replace(/height="[^"]*"/, `height=${height}`)
      .replace(/width="[^"]*"/, 'width="100%"');
  }

  menuSvg(svg: string | SafeHtml) {
    const resize = this.setSize( svg as string,'14px');
    return this.sanitizer.bypassSecurityTrustHtml(resize);
  }

  makeInnerHTMLSafe(svg: string, selected: boolean = false){
    
    const setSize =this.setSize(svg);
    return this.sanitizeSvg(setSize, selected);
  }

  private isValidZodiac(zodiac: string): zodiac is TZodiacSign {
    return [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Libra', 'Scorpio',
      'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Virgo'
    ].includes(zodiac);
  }

  private changeSvgColor(svg: string, selected: boolean = false):string {
    if (!svg){
      return svg;
    }
    let targets: Array<'primary' | 'secondary' | 'tertiary' | 'stroke'> = ['primary','secondary', 'tertiary' , 'stroke'];
    if (selected){
      targets.forEach(t => {
        if (t == 'secondary'){
          svg = svg?.replace(new RegExp(t,"g"),this.svgColor['primary']) || '';
        } else if (t == 'primary'){
          svg = svg?.replace(new RegExp(t,"g"),this.svgColor['stroke']) || '';
        } else {
          svg = svg?.replace(new RegExp(t,"g"),this.svgColor[t]) || '';
        }
      });
    } else {
      targets.forEach(t => {
        svg = svg?.replace(new RegExp(t,"g"),this.svgColor[t]) || '';
      });
    }
    return svg;
  }

  private setOpenSvg(){
    // const i = this.zodiacDetails.indexOf(this.zodiacDetails.find(z => z.title == this.zodiac) || this.zodiacDetails[0]);
    // this.openSvg = this.sanitizeSvg(this.zodiacDetails[i].svg);
    this.openSvgUnSafe = this.zodiacService.getSvg(this.zodiac);
    this.openSvg = this.sanitizeSvg(this.openSvgUnSafe, false);
  }

  dateToDisplay(){
    const d = new Date();
    if (this.day=="Today"){
      return d;
    } else if (this.day == "Tomorrow") {
      d.setDate(d.getDate() + 1);
      return d;
    } else if (this.day == "Yesterday") {
      d.setDate(d.getDate() - 1);
      return d;
    }
    return d;
  }
  onStarClick(ind: number){
    this.router.navigate(['horoscope', this.starMapper.at(ind)])
  }
}
