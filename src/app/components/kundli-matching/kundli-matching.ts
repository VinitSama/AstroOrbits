import { Component, OnInit } from '@angular/core';
import { SectionTag } from "../section-tag/section-tag";
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { Article } from "../article/article";
import { BlogSection } from "../blog-section/blog-section";
import { IArticle } from '../../interfaces/iarticle';
import { CommonModule } from '@angular/common';
import { KundliForm } from "../kundli-form/kundli-form";
import { IKundliForm } from '../../interfaces/ikundli-form';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationSection } from "../information-section/information-section";

type TGender = 'm' | 'f';

@Component({
  selector: 'app-kundli-matching',
  imports: [
    SectionTag,
    Article,
    BlogSection,
    CommonModule,
    KundliForm,
    InformationSection
],
  templateUrl: './kundli-matching.html',
  styleUrl: './kundli-matching.css'
})
export class KundliMatching implements OnInit {

  svgColor!: ISvgColors;
  formSectionHeading = "Free Kundli Matching";
  articleSectionHeading = "What Is a Janam Kundli or Birth Chart?";
  headers= ["What is Janam Kundlli?", "How It Helps You in Life Decision?"];
  para=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."];
  svgs = ['/images/buletin.svg','/images/buletin.svg'];
  article: IArticle = {
    title: "",
    content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope"
  }
  blogSectionHeading = "You may also like"
  selectedGender: TGender = 'm';

  boyFormData: IKundliForm | null = null;
  girlFormData: IKundliForm | null = null;


  constructor(private themeService: ThemeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadSVGColor();
  }

  onBoyFormChange(data: IKundliForm) {
    this.boyFormData = data;
  }

  onGirlFormChange(data: IKundliForm) {
    this.girlFormData = data;
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  chooseGenderOption(option: TGender) {
    this.selectedGender = option;
  }

  submit() { 
    if (this.isValidForm(this.boyFormData) && this.isValidForm(this.girlFormData)) {
      console.log(this.boyFormData, this.girlFormData);
      this.router.navigate(['result'],{relativeTo: this.route});      
    } else {
      alert('Please complete both forms correctly.');
    }
  }

  isValidForm(form: IKundliForm | null): boolean {
    return (
      form != null &&
      typeof form.name === 'string' && form.name.trim() !== '' &&
      typeof form.dob === 'string' && form.dob.trim() !== '' &&
      typeof form.time === 'string' && form.time.trim() !== '' &&
      typeof form.place === 'string' && form.place.trim() !== ''
    );
  }
}
