import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { CommonModule } from '@angular/common';
import { NumerlogyCard } from "../numerlogy-card/numerlogy-card";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ThemeService } from '../../../services/theme.service';
import { PersonalizeSection } from "../../personalize-section/personalize-section";
import { IPersonalisedContainer } from '../../../interfaces/ipersonalised-container';
import { SectionTag } from "../../section-tag/section-tag";
import { KundliMenuCard } from "../../menu-card-container/cards/kundli-menu-card/kundli-menu-card";
import { HoroscopeMenuCard } from "../../menu-card-container/cards/horoscope-menu-card/horoscope-menu-card";
import { LoveMenuCard } from "../../menu-card-container/cards/love-menu-card/love-menu-card";
import { AstrologySection } from "../../astrology-section/astrology-section";
import { AboutSection } from "../../about-section/about-section";
import { FAQSection } from "../../faq-section/faq-section";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TZodiacSign } from '../../../types/tzodiac-sign';
import { ZodiacServices } from '../../../services/zodiac.services';
import { IAboutCard } from '../../../interfaces/iabout-card';
import { numerologyAboutCard } from '../numerlogy-about';

@Component({
  selector: 'app-numerlogy-particular',
  imports: [
    CommonModule,
    NumerlogyCard,
    PersonalizeSection,
    SectionTag,
    KundliMenuCard,
    HoroscopeMenuCard,
    LoveMenuCard,
    AstrologySection,
    AboutSection,
    FAQSection
],
  templateUrl: './numerlogy-particular.html',
  styleUrl: './numerlogy-particular.css'
})
export class NumerlogyParticular implements OnInit {

  svgColor!: ISvgColors;

  selectedNum: number = 1;

  numOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
  nature: string[] = ["Compasion", "Empathy", "Kindness", "Altruism"]

  report = {
    breif: "Number 9 individuals are humanitarian souls who seek to serve humanity and make the world a better place. They possess deep compassion and universal understanding.",
    lucky: [
      {name: "Element", value: "Fire"},
      {name: "Color", value: "Red"},
      {name: "Gemstone", value: "Bloodstone"},
      {name: "Planet", value: "Mars"},
    ] 
  }

  numerologyTypes: {
    name: string;
    number: number;
  }[] = [
    {name: "Life Path Number", number: 1},
    {name: "Personality Number", number: 1},
    {name: "Expression Number", number: 1},
    {name: "Soul Urge Number", number: 1},
  ];
  selectedDay: string = "Today";
  dayOptions: string[] = ["Today", "Tomorrow", "Yesterday", "Weekly", "Monthly", "Yearly"];

  personaliseInfo: IPersonalisedContainer = {
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

  
  horoscope: {
    name: TZodiacSign,
  } = {
    name: 'Aries',
  }

  horoscopeSvg!: SafeHtml;
  aboutCard!: IAboutCard;

  constructor(private headerService: HeaderService, private route: ActivatedRoute, private router: Router, private themeService: ThemeService, private sanitizer: DomSanitizer, private zodiacService: ZodiacServices) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.loadFromRouter(params);
    });
    this.headerService.setColorSubject(true);
    this.headerService.setNavSubject('Numerology');
    this.loadSvgColors();
    this.getHoroscopeSVG()
    this.aboutCard = numerologyAboutCard;
  }


  private getHoroscopeSVG() {
    const svg = this.zodiacService.getSvg(this.horoscope.name);
    const newSVG = this.changeSize(svg);
    this.horoscopeSvg = this.safeSVGMaker(newSVG);
  }

  private safeSVGMaker(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private changeSize(svgString: string){
    
    const colorSvg = this.changeSvg(svgString);

    const newHSVG = colorSvg.replace(
      /(<svg[^>]+)(height="[^"]*")/g, 
      (match, p1) => `${p1} height="${'16px'}"`
    );

    return newHSVG.replace(
      /(<svg[^>]+)(width="[^"]*")/g, 
      (match, p1) => `${p1} width="${'22px'}"`
    );
  }
  private changeSvg(svg: string): string {
    let targets: Array<'primary' | 'secondary' | 'tertiary' | 'stroke'> = ['primary','secondary', 'tertiary' , 'stroke']
    targets.forEach(t => {
      svg = svg?.replace(new RegExp(t,"g"),this.svgColor[t]) || '';
    });
    return svg;
  }

  private loadSvgColors() {
    this.svgColor = this.themeService.getSvgColor();
  }

  private loadFromRouter(params: ParamMap){
    const numParam = params.get('num');
    if (numParam) {
      this.selectedNum = parseInt(numParam, 10);
    }
  }

  setNumber(num: number) {
    this.router.navigate(['numerology', num]);
  }

  setDay(day: string) {
    this.selectedDay = day;
  }

  goToType(t: string) {
    this.router.navigate(['numerology','t',t,this.selectedNum]);
  }

}
