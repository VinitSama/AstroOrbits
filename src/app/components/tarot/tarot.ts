import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../services/header.service';
import { SectionTag } from "../section-tag/section-tag";
import { PersonalizeSection } from "../personalize-section/personalize-section";
import { IPersonalisedContainer } from '../../interfaces/ipersonalised-container';
import { AstrologySection } from "../astrology-section/astrology-section";
import { AboutSection } from "../about-section/about-section";
import { RudrakshSection } from "../rudraksh-section/rudraksh-section";
import { TarotCard } from "./tarot-card/tarot-card";
import { FAQSection } from "../faq-section/faq-section";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TSelectedOption } from './tarot-reading/tarot-reading';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-tarot',
  imports: [
    CommonModule,
    SectionTag,
    PersonalizeSection,
    AstrologySection,
    AboutSection,
    RudrakshSection,
    TarotCard,
    FAQSection
],
  templateUrl: './tarot.html',
  styleUrl: './tarot.css'
})
export class Tarot implements OnInit {

  sectionBrief = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos";

  features: {
      heading: string;
      subHeading: string;
      svgName: string;
    }[] = [
      {
        heading: "100% Secure and confidential",
        subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l.",
        svgName: "confidential.svg",
      },
      {
        heading: "Fully Accurate",
        subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l.",
        svgName: "accurate.svg",
      },
      {
        heading: "Personalised curated insights",
        subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l.",
        svgName: "currated.svg",
      },
      {
        heading: "Instant results",
        subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l.",
        svgName: "instant.svg",
      },
  ];

  selectedCardOption: 1 | 3 = 3;
  selectedCards: Set<number> = new Set<number>();
  enableButton: boolean = false;
  selectedOption: TSelectedOption = 3;
  

  personalisedContainer: IPersonalisedContainer = {
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

  constructor(private headerSevice: HeaderService, private router: Router, private route: ActivatedRoute, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateTags({
      title: "Tarot Reading at Astroorbits | Expert Tarot Card Insights & Guidance",
      description: "Discover personalized tarot readings with expert insights into your past, present, and future. Experience authentic Tarot guidance updated regularly at Astroorbits.",
      keywords: "tarot reading, tarot card insights, personalized tarot, tarot guidance, expert tarot reading, tarot predictions",
      ogTitle: "Tarot Reading | Expert Tarot Card Insights & Guidance at Astroorbits",
      ogDescription: "Explore accurate and personalized tarot readings with expert guidance. Updated frequently to provide fresh insights and clarity."
    })
    this.headerSevice.setColorSubject(false);
    this.headerSevice.setNavSubject('Tarot Reading');
    this.selectedCards = new Set<number>();
    this.enableButton = false;
    this.route.paramMap.subscribe(params => {
      this.setSelectedOption(params);
    })
  }

  private setSelectedOption(params: ParamMap){
    const option = parseInt(params.get('option') || '0', 10);
    if ([1, 3, 4, 5].includes(option as TSelectedOption)) {
      this.selectedOption = option as TSelectedOption;
      if (this.selectedOption == 4 || this.selectedOption == 5){
        this.selectedCardOption = 3;
      } else {
        this.selectedCardOption = this.selectedOption;
      }
    }
  }

  selectCard(index: number) {
    if (this.enableButton || this.isSelected(index)) {
      return;
    }
    this.selectedCards.add(index);
    if (this.selectedCards.size == this.selectedCardOption) {
      this.enableButton = true;
    }
  }

  isSelected(index: number) {
    return this.selectedCards.has(index);
  }

  submitCards() {
    if (this.enableButton) {
      console.log('submited');
      this.router.navigate(['tarot',this.selectedOption]);
    }
  }
}
