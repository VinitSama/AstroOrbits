import { Component } from '@angular/core';
import { SectionTag } from "../section-tag/section-tag";
import { ThemeService } from '../../services/theme.service';
import { ISvgColors } from '../../interfaces/isvg-link';
import { IPanchangTable } from '../../interfaces/ipanchang-table';
import { CommonModule } from '@angular/common';
import { PanchangTable } from "./panchang-table/panchang-table";
import { IArticle } from '../../interfaces/iarticle';
import { Article } from "../article/article";
import { BlogSection } from "../blog-section/blog-section";
import { PanchangService } from '../../services/panchang.service';

@Component({
  selector: 'app-panchang',
  imports: [
    SectionTag,
    CommonModule,
    PanchangTable,
    Article,
    BlogSection
],
  templateUrl: './panchang.html',
  styleUrl: './panchang.css'
})
export class Panchang {

  svgColor!: ISvgColors;
  panchangPageHeading: "Today's Panchang" | "Panchang" = "Today's Panchang";
  panchang!: any;
  date = 0;

  tables: IPanchangTable[] = [
    {
      title: "Noida",
      isOptions: true,
      options: ['date', 'location'],
      details: []
    },
    {
      title: "Sun & Moon Calculations",
      isOptions: false,
      details: []
    },
    {
      title: "Hindu Month & Year",
      isOptions: false,
      details: []
    },
    {
      title: "Inauspicious Timings (Ashubha Muhurat)",
      isOptions: false,
      details: []
    },
    {
      title: "Auspicious Timings (Shubha Muhurat)",
      isOptions: false,
      details: []
    },
  ]

  articleHeading = "What Is a Janam Kundli or Birth Chart?";
  blogSectionHeading = "You may also like";
  article: IArticle = {
    title: "",
    content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope"
  }  
  constructor(private themeService: ThemeService, private panchangService: PanchangService) {}

  ngOnInit(): void {
    this.loadSVGColor();
    this.loadPanchang();
  }

  private loadPanchang() {
    this.panchangService.getPanchang(this.date).subscribe({
      next: response => {
        this.panchang = response;
        this.makeTables();
        console.log(this.panchang);
      },
      error: err => {
        console.error('API error:', err);
      }
    });
  } 

  private makeTables() {
    const response = this.panchang?.response;
    if (!response) return;
    this.tables[0].details=[
      {
        name: "Tithi",
        value: response['tithi']['name'],
      },
      {
        name: "Nakshatra",
        value: response['nakshatra']['name'],
      },
      {
        name: "Karana",
        value: response['karana']['name'],
      },
      {
        name: "Paksha",
        value: response['advanced_details']['masa']['paksha'],
      },
      {
        name: "Yoga",
        value: response['yoga']['name'],
      },
    ];
    this.tables[1].details=[
      {
        name:"Sunrise",
        value: response['advanced_details']["sun_rise"],
      },
      {
        name:"Sunset",
        value: response['advanced_details']["sun_set"],
      },
      {
        name:"Moonrise",
        value: response['advanced_details']['moon_rise'],
      },
      {
        name:"Moonset",
        value: response['advanced_details']['moon_set'],
      },
      {
        name:"Ritu",
        value: response['advanced_details']['masa']['ritu'],
      },
      {
        name:"Moon Sign",
        value: response['sun_position']['zodiac'],
      },
    ];
    this.tables[2].details=[
      {
        name:"Shaka Samvat",
        value:`${response['advanced_details']["years"]['saka']} ${response['advanced_details']["years"]['saka_samvaat_name']}`,
      },
      {
        name:"Vikram Samvat",
        value:`${response['advanced_details']["years"]['vikram_samvaat']} ${response['advanced_details']["years"]['vikram_samvaat_name']}`,
      },
      {
        name:"Month Amanta",
        value:response['advanced_details']['masa']['amanta_name'],
      },
      {
        name:"Month Purnimanta",
        value:response['advanced_details']['masa']['purnimanta_name'],
      },
    ];
    this.tables[3].details=[
      {
        name: "Rahu Kaal",
        value: response['rahukaal'],
      },
      {
        name: "Yamaganda",
        value: response['yamakanta']
      },
      {
        name: "Gulika Kaal",
        value: response['gulika']
      },
    ];
    this.tables[4].details=[
      {
        name:"Abhijit",
        value:`${response['advanced_details']['abhijit_muhurta']['start']} to ${response['advanced_details']['abhijit_muhurta']['end']}`
      }
    ]
    console.log(this.tables)
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  changeHeading(showToday: number){
    this.date += showToday;
    this.loadPanchang();

    this.panchangPageHeading = this.date == 0 ? "Today's Panchang" : "Panchang";
  }

}
