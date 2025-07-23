import { Component, Input, OnInit } from '@angular/core';
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
import { IArticle } from '../../../interfaces/iarticle';
import { BlogSection } from "../../blog-section/blog-section";
import { HoroscopeService } from '../../../services/horoscope.service';
import { HeaderService } from '../../../services/header.service';

type TDates = "Yesterday" | "Tomorrow" | "Today" | "Weekly" | "Monthly" | "Yearly"; 

@Component({
  selector: 'app-particular',
  imports: [
    CommonModule,
    SectionTag,
    BlogSection,
],
  templateUrl: './particular.html',
  styleUrl: './particular.css'
})
export class Particular implements OnInit{

  @Input() zodiac!: TZodiacSign;
  @Input() day!: string;
  @Input() openPrecise: number = 0;
  
  svgColor!:ISvgColors;
  openSvg!: SafeHtml;
  article!: IArticle;

  horoscope!: any;

  daysOption: TDates[] = ["Yesterday", "Tomorrow", "Today", "Weekly", "Monthly", "Yearly"];

  zodiacDetails!: IZodiacCard [];

  report: IZodiacHoroscope = {
    brief: "Dear Aries, the Moon is in Capricorn today. Your legal case, which has been going on for a very long time, will finally be resolved in your favor. As a result, you will finally be relieved of the stress and anxiety this case has put on you. Astroyogi astrologers suggest you to move on with your life and resume your routine with new energy and passion. You can finally give your time to the things that matter in life and spare some time for mental peace. So, don’t wait any longer to work on your mental and emotional health.",
    remedy: "Meditate for 10 minutes",
    luckyInformation: {
      luckyNumber: 1,
      luckyColor: "Cyan",
      mood: "Innovative",
      positivity: 85,
    }
  }

  presiceHoroscope: {name: string, value: string}[] = [
    {
      name: "Love",
      value: "Love",
    },
    {
      name: "Career",
      value: "Career",
    },
    {
      name: "Finance",
      value: "Finance",
    },
    {
      name: "Health",
      value: "Health",
    },
    {
      name: "Lover",
      value: "Lover",
    },
    {
      name: "Man",
      value: "Man",
    },
    {
      name: "Women",
      value: "Women",
    },
    {
      name: "Traits",
      value: "Traits",
    },
  ]

  constructor( private headerService: HeaderService ,private themeService: ThemeService, private zodiacService: ZodiacServices, private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private horoscopeService: HoroscopeService) {}
  
  ngOnInit(): void {
    this.headerService.setColorSubject(true);
    this.loadSVGColor();
    this.loadCards();
    this.route.paramMap.subscribe(params => {
      this.loadFromRouteIfNeeded(params);
    });
  }

  getSvgFile(i: number){
    const svg = '/images/horoscope-precise/' + (i+1) + '.svg';
    return svg;
  }

  changeArticle(i:number){
    if (i<this.presiceHoroscope.length) {
      this.openPrecise = i;
      this.article = {
        title: "",
        content: this.presiceHoroscope[this.openPrecise].value
      }
    }
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  private loadCards(){
    this.zodiacDetails = this.zodiacService.getAllCards();
  }

  private apiCall(day: string){
    if (day == 'Today'){
      this.horoscopeService.zodiacTodayHoroscope(this.zodiac).subscribe({
        next: response => {
          this.horoscope = response;
          console.log('Horoscope:', response);
          this.makeReport();
        },
        error: err => {
          console.error('API error:', err);
        }
      });
    } else if (day=='Tomorrow'){
      this.horoscopeService.zodiacTomorrowHoroscope(this.zodiac).subscribe({
        next: response => {
          this.horoscope = response;
          console.log('Horoscope:', response);
          this.makeReport();
        },
        error: err => {
          console.error('API error:', err);
        }
      });
    } else if (day=='Weekly'){
      this.horoscopeService.zodiacWeeklyHoroscope(this.zodiac).subscribe({
        next: response => {
          this.horoscope = response;
          console.log('Horoscope:', response);
          this.makeReport();
        },
        error: err => {
          console.error('API error:', err);
        }
      });
    } else if (day=='Yearly'){
      this.horoscopeService.zodiacYearlyHoroscope(this.zodiac).subscribe({
        next: response => {
          this.horoscope = response;
          console.log('Horoscope:', response);
          this.makeReport();
        },
        error: err => {
          console.error('API error:', err);
        }
      });
    }
    
  }
  private makeReport(){
    const response = this.horoscope?.response;
    if (response){
      this.report.brief = response?.bot_response;
      this.report.luckyInformation = {
        luckyColor: response?.lucky_color,
        luckyNumber: response.lucky_number[0],
        mood: "Innovative",
        positivity: 80,
      }
    }
    console.log(this.report)
  }

  private loadFromRouteIfNeeded(params: ParamMap){
    const zodiacParam = params.get('zodiac');
    const dayParam = params.get('day');

    if (zodiacParam && this.isValidZodiac(zodiacParam)) {
      this.zodiac = zodiacParam as TZodiacSign;
    }

    this.day = (dayParam as TDates) || 'Today';

    this.setOpenSvg();
    this.changeArticle(this.openPrecise);
    
    this.apiCall(this.day);
    console.log(this.horoscope);
    
  }

  onZodiacClick(title: TZodiacSign | null){
    this.router.navigate(['/home/horoscope', this.day, title]);
  }

  private sanitizeSvg(svg: string, selected: boolean = false) {
    const setColor = this.changeSvgColor(svg, selected);
    return this.sanitizer.bypassSecurityTrustHtml(setColor);
  }

  private setSize(svg: string){
    return svg
      .replace(/height="[^"]*"/, 'height="40px"')
      .replace(/width="[^"]*"/, 'width="100%"');
  }

  makeInnerHTMLSafe(svg: string, selected: boolean = false){
    const setSize =this.setSize(svg);
    if (selected) {
      return this.sanitizeSvg(setSize, true);
    }
    return this.sanitizeSvg(setSize);
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
    let targets: Array<'primary' | 'secondary' | 'tertiary' | 'stroke'> = ['primary','secondary', 'tertiary' , 'stroke']
    targets.forEach(t => {
      if (selected && t == 'secondary'){
        svg = svg?.replace(new RegExp(t,"g"),this.svgColor['primary']) || '';
      } else if (selected && t == 'primary'){
        svg = svg?.replace(new RegExp(t,"g"),this.svgColor['stroke']) || '';
      } else {
        svg = svg?.replace(new RegExp(t,"g"),this.svgColor[t]) || '';
      }
    });
    return svg;
  }

  private setOpenSvg(){
    const i = this.zodiacDetails.indexOf(this.zodiacDetails.find(z => z.title == this.zodiac) || this.zodiacDetails[0]);
    this.openSvg = this.sanitizeSvg(this.zodiacDetails[i].svg);
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

  setDate(date: TDates) {
    this.day = date;
    console.log(this.day);
    this.apiCall(this.day);
  }
}
