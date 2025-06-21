import { Component } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { BlogSection } from "../blog-section/blog-section";
import { SectionTag } from "../section-tag/section-tag";
import { IKundliForm } from '../../interfaces/ikundli-form';
import { Article } from "../article/article";
import { IArticle } from '../../interfaces/iarticle';
import { ActivatedRoute, Router } from '@angular/router';
import { KundliForm } from '../kundli-form/kundli-form';

@Component({
  selector: 'app-kundli',
  imports: [
    BlogSection,
    SectionTag,
    KundliForm,
    Article
],
  templateUrl: './kundli.html',
  styleUrl: './kundli.css'
})
export class Kundli {

  svgColor!: ISvgColors;
  kundliFormTitle ="Free Kundli";
  articleSectionHeading = "What Is a Janam Kundli or Birth Chart?";
  article: IArticle = {
    title: '',
    content: "horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br.<br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br.<br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br.<br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br.<br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope",
  }
  blogSectionHeading = "You may also like";

  
  private themeUpdateSubscription!: Subscription; 

  constructor(private themeService: ThemeService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadSVGColor();
    this.themeUpdateSubscription = this.themeService.getThemeSubject().subscribe(()=>{
      this.loadSVGColor();
    })
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  onFormSubmit(form: IKundliForm) {
    console.log(form);
    this.router.navigate(['result'],{relativeTo: this.route})
  }

}
