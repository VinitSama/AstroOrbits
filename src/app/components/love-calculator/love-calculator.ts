import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { IArticle } from '../../interfaces/iarticle';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { SectionTag } from "../section-tag/section-tag";
import { Article } from "../article/article";
import { BlogSection } from "../blog-section/blog-section";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResultProgress } from "../result-progress/result-progress";
import { InformationSection } from "../information-section/information-section";

type TFormOption = 'User' | 'Partner';
type TGender = "m" | "f";

@Component({
  selector: 'app-love-calculator',
  imports: [
    CommonModule,
    SectionTag,
    Article,
    BlogSection,
    ReactiveFormsModule,
    ResultProgress,
    InformationSection
],
  templateUrl: './love-calculator.html',
  styleUrl: './love-calculator.css'
})
export class LoveCalculator {

  svgColor!: ISvgColors;
  
  pageHeading: "Love Calculator" | "Love Calculator Result" = "Love Calculator" ;

  headers= ["What is Janam Kundlli?", "How It Helps You in Life Decision?"];
  para=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."];
  svgs = ['/images/buletin.svg','/images/buletin.svg'];

  loveCalculatorContent: IArticle = {
    title: "",
    content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope"
  }

  loveCalculatorOptions = ["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum",]

  blogSectionHeading = "You may also like";

  showForm: boolean = true;

  selectedOption: TFormOption = 'User';

  userName = new FormControl('',[Validators.required]);
  partnerName = new FormControl('',[Validators.required]);
  gender: {
    user: TGender;
    partner: TGender;
  } = {
    user: 'm',
    partner: 'f',
  }
  autoChange: number = 1;
  
  submitted = false;

  resultScore: number =80;
  resultBrief: string = "Your love is the he best love; the kind that awakens the soul; that makes both of you reach for more.";
  
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSVGColor();
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  chooseFormOption(option: TFormOption) {
    this.selectedOption = option;
  }

  chooseGender(gender: TGender) {
    if(this.selectedOption == 'User') {
      this.gender.user = gender;
      if (this.autoChange > 0) {
        this.gender.partner = gender == 'm' ? 'f' : 'm';
      }
    } else {
      this.gender.partner = gender;
      if (this.autoChange > 0) {
        this.gender.user = gender == 'm' ? 'f' : 'm';
      }
    }
    // this.autoChange -= 1;
  }

  changeContent(idx: number) {
    //
  }

  toggleForm(showForm: boolean){
    this.showForm = showForm;
    this.pageHeading = showForm? "Love Calculator" : "Love Calculator Result";
  }

}
