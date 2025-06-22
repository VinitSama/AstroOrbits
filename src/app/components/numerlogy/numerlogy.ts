import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { SectionTag } from "../section-tag/section-tag";
import { IArticle } from '../../interfaces/iarticle';
import { Article } from "../article/article";
import { BlogSection } from "../blog-section/blog-section";

@Component({
  selector: 'app-numerlogy',
  imports: [
    CommonModule,
    SectionTag,
    Article,
    BlogSection
],
  templateUrl: './numerlogy.html',
  styleUrl: './numerlogy.css'
})
export class Numerlogy implements OnInit {

  option: string = '';
  num: number = 0;
  svgColor!: ISvgColors;
  pageHeading = "Numerology";
  numOption = [1,2,3,4,5,6,7,8,9];
  dateOption = ["Daily", "Weekly", "Monthly", "Yearly"];
  selectedDateOption = "Daily";
  report: {
    heading: string;
    report: string;
    date: string;
  } = {
    heading: 'Lorem Ipsum',
    date: "Monday 16, 2025",
    report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out."
  }
  otherOption = ["Life Path", "Ruling", "Personality", "Angel", "Master"]
  optionHeading = "What is Numerology";
  article: IArticle = {
    title: "",
    content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope"
  }
  constructor(private themeService: ThemeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadSvgColors();
    this.route.paramMap.subscribe(params => {
      this.loadFromRouteIfNeeded(params);
      this.setPageHeading();
      this.setOptionHeading();
    });
  }

  private loadSvgColors(){
    this.svgColor = this.themeService.getSvgColor();
  }

  private loadFromRouteIfNeeded(params: ParamMap){
    const option = params.get('option');
    const num = params.get('num');
    this.option = option ?? "";
    if (option == "0") {
      this.option = "";
    }
    this.num = Number(num) ?? 0; 
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
  }

  private setPageHeading() {
    this.pageHeading = this.option ? `Calculate Your ${this.option}` : "Numerology";
  }

  private setOptionHeading() {
    if (!this.option || this.option == "0"){
      this.optionHeading = "What is Numerology";
    } else {
      this.optionHeading = this.option;
    }
  }

  setDate(date: string){
    this.selectedDateOption = date;
  }

  setNumber(i: number) {
    this.router.navigate(["home/numerology", this.option, i]);
  }
  setOption(option: string) {
    this.router.navigate(["home/numerology", option, this.num]);
  }

}
