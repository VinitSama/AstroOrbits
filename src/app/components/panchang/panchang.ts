import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ISvgColors } from '../../interfaces/isvg-link';
import { CommonModule } from '@angular/common';
import { PanchangService } from '../../services/panchang.service';
import { SectionTag } from "../section-tag/section-tag";
import { DetailsTable } from "../details-table/details-table";
import { IKundliDetail } from '../../interfaces/ikundli-detail';
import { KundliMenuCard } from "../menu-card-container/cards/kundli-menu-card/kundli-menu-card";
import { HoroscopeMenuCard } from "../menu-card-container/cards/horoscope-menu-card/horoscope-menu-card";
import { LoveMenuCard } from "../menu-card-container/cards/love-menu-card/love-menu-card";
import { AboutSection } from "../about-section/about-section";
import { FAQSection } from "../faq-section/faq-section";
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-panchang',
  imports: [
    CommonModule,
    SectionTag,
    DetailsTable,
    KundliMenuCard,
    HoroscopeMenuCard,
    LoveMenuCard,
    AboutSection,
    FAQSection
],
  templateUrl: './panchang.html',
  styleUrl: './panchang.css'
})
export class Panchang {

  svgColor!: ISvgColors;
  panchangPageHeading: string = "Panchang for ";
  dayHeading: string = "Today";
  panchang!: any;
  day = 0;
  sectionBrief = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos"
  dayMap: { [key: number]: string } = {
    0: "Today",
    1: "Tomorrow",
    [-1]: "Yesterday",
  };

  date!: Date;
  forDecreament!: Date;
  forIncreament!: Date;

  today: {
    tithi: number,
    month: string,
    paksha: string,
    year: string,
  } = {
    tithi: 18,
    month: "Shravana",
    paksha: "Shukla Paksha",
    year: "Tritiya 2082 Kalayukta, Vikrama Samvata"
  }

  location = "New Delhi, India";

  pachangTable: IKundliDetail[] = [];
  holidayTable: {
    name: string;
    date: string;
    imgUrl: string;
    gap?: string;
  }[] = [
    {
      name: "Haryali Teej",
      date: "August 27, 2025 (Sunday)",
      imgUrl: "./images/sample_holiday.jpg",
    }
  ];

  constructor(private headerService: HeaderService, private themeService: ThemeService, private panchangService: PanchangService) {}

  ngOnInit(): void {
    this.headerService.setColorSubject(false);
    this.headerService.setNavSubject('Panchang');
    this.loadSVGColor();
    this.loadPanchang();
    this.date = new Date();
    this.forDecreament = new Date(this.date);
    this.forIncreament = new Date(this.date);
    this.forDecreament.setDate(this.date.getDate() -1);
    this.forIncreament.setDate(this.date.getDate() +1);
    this.changeAllHoliday();
  }

  private loadPanchang() {
    this.panchangService.getPanchang(this.day).subscribe({
      next: response => {
        this.panchang = response;
        this.makeTables();
      },
      error: err => {
        console.error('API error:', err);
      }
    });
  } 

  private makeTables() {
    const response = this.panchang?.response;
    if (!response || response?.status != 200) return;
    
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  changeDate(direction: number){
    this.day += direction;
    this.date = this.getDateForDay(this.day);
    this.forDecreament = this.getDateForDay(this.day - 1);
    this.forIncreament = this.getDateForDay(this.day + 1);
    if (this.day in this.dayMap) {
      this.dayHeading = this.dayMap[this.day];
    } else {
      this.dayHeading = this.date.toLocaleDateString('en-US', {dateStyle: 'full'});
    }
    // this.changeAllHoliday();
  }

  getDateForDay(day: number): Date {
    const currentDate = new Date();
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + day);
    return newDate;
  }

  changLocation() {
    //
  }

  private dayGap(date: string): string {
    const today = new Date();
    // const today = this.date;
    const targetDate = new Date(date);
    const diffTime = Math.abs(targetDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "1 Day";
    }
    return `${diffDays} Days`;
  }

  private changeAllHoliday() {
    this.holidayTable.forEach(h => {
      h.gap = this.dayGap(h.date);
    })
  }

  makeDate(date: string) {
    return new Date(date).toLocaleDateString('en-US');
  }
}
