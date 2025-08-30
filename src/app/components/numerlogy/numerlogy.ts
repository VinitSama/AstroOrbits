import { CommonModule } from '@angular/common';
import { Component, effect, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { SectionTag } from "../section-tag/section-tag";
import { IArticle } from '../../interfaces/iarticle';
import { MenuCard } from "../menu-card-container/menu-card/menu-card";
import { IMenuCard } from '../../interfaces/imenu-card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NumerlogyCard } from "./numerlogy-card/numerlogy-card";
import { HeaderService } from '../../services/header.service';
import { TrendingTags } from "../trending-tags/trending-tags";
import { ITrendingContainer } from '../../interfaces/itrending-tag';
import { PersonalizeSection } from "../personalize-section/personalize-section";
import { IPersonalisedContainer } from '../../interfaces/ipersonalised-container';
import { RudrakshSection } from "../rudraksh-section/rudraksh-section";
import { KundliMenuCard } from "../menu-card-container/cards/kundli-menu-card/kundli-menu-card";
import { HoroscopeMenuCard } from "../menu-card-container/cards/horoscope-menu-card/horoscope-menu-card";
import { LoveMenuCard } from "../menu-card-container/cards/love-menu-card/love-menu-card";
import { BlogSection } from "../blog-section/blog-section";
import { AstrologySection } from "../astrology-section/astrology-section";
import { AboutSection } from "../about-section/about-section";
import { FAQSection } from "../faq-section/faq-section";
import { ResposiveService } from '../../services/resposive.service';

@Component({
  selector: 'app-numerlogy',
  imports: [
    CommonModule,
    SectionTag,
    MenuCard,
    ReactiveFormsModule,
    NumerlogyCard,
    TrendingTags,
    PersonalizeSection,
    RudrakshSection,
    KundliMenuCard,
    HoroscopeMenuCard,
    LoveMenuCard,
    BlogSection,
    AstrologySection,
    AboutSection,
    FAQSection
],
  templateUrl: './numerlogy.html',
  styleUrl: './numerlogy.css'
})
export class Numerlogy implements OnInit {

  menuCard: IMenuCard = {
    heading: "Find your number",
    blurColor: "#FFBC35",
    width: "424px",
    sub: "Ask the numbers what they hold in your fututre.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <g clip-path="url(#clip0_997_3837)">
    <path d="M24.4688 11.5464H21.7914L22.7594 10.6748C23.8457 9.6967 24.4688 8.29726 24.4688 6.83545C24.4688 5.28032 23.2036 4.01514 21.6484 4.01514C20.0933 4.01514 18.8281 5.28032 18.8281 6.83545V7.77295H20.7031V6.83545C20.7031 6.3142 21.1272 5.89014 21.6484 5.89014C22.1697 5.89014 22.5938 6.3142 22.5938 6.83545C22.5938 7.7667 22.1968 8.65826 21.5047 9.28139L18.8281 11.6914V13.4213H24.4688V11.5464Z" fill="#240028"/>
    <path d="M10.3516 19.0781C8.79644 19.0781 7.53125 20.3433 7.53125 21.8984V22.8359H9.40625V21.8984C9.40625 21.3772 9.83031 20.9531 10.3516 20.9531C10.8728 20.9531 11.2969 21.3772 11.2969 21.8984C11.2969 22.4197 10.8728 22.8438 10.3516 22.8438H9.41406V24.7188H10.3516C10.8728 24.7188 11.2969 25.1428 11.2969 25.6641C11.2969 26.1853 10.8728 26.6094 10.3516 26.6094C9.83031 26.6094 9.40625 26.1853 9.40625 25.6641V24.7266H7.53125V25.6641C7.53125 27.2192 8.79644 28.4844 10.3516 28.4844C11.9067 28.4844 13.1719 27.2192 13.1719 25.6641C13.1719 24.9411 12.8981 24.2809 12.4492 23.7812C12.8981 23.2816 13.1719 22.6214 13.1719 21.8984C13.1719 20.3433 11.9067 19.0781 10.3516 19.0781Z" fill="#240028"/>
    <path d="M22.5938 24.7266H20.9862L22.8599 19.8519L21.1097 19.1792L18.8281 25.1151V26.6016H22.5938V28.4844H24.4688V22.4688H22.5938V24.7266Z" fill="#240028"/>
    <path d="M9.41406 13.4214H11.2891V4.01514H7.53125V5.89014H9.41406V13.4214Z" fill="#240028"/>
    <path d="M16.9375 4.01562H15.0625V15.3125H3.76562V17.1875H15.0625V28.4844H16.9375V17.1875H28.2344V15.3125H16.9375V4.01562Z" fill="#240028"/>
    <path d="M25.8024 0.25H6.19763L0 6.44763V26.0524L6.19763 32.25H25.8024L32 26.0524V6.44763L25.8024 0.25ZM30.125 25.2757L25.0257 30.375H6.97425L1.875 25.2757V7.22425L6.97425 2.125H25.0257L30.125 7.22425V25.2757Z" fill="#240028"/>
  </g>
  <defs>
    <clipPath id="clip0_997_3837">
      <rect width="32" height="32" fill="white" transform="translate(0 0.25)"/>
    </clipPath>
  </defs>
</svg>`,
  }


  selectedDay: string = "";
  selectedType: string = "";
  showDayInfo: boolean = false;
  showTypeInfo: boolean = false;
  validTypes = ["Life Path Number", "Angle Number", "Master Number", "Ruling Number"];
  validDays = ["Daily", "Weekly", "Monthly", "Yearly", "Angel"];
  thisYear: string = '2025'
  pageHeading: string = "Numerology"
  selectedDayBrief: string = "";
  selectedTypeBrief: string = "";

  // option: string = '';
  // num: number = 0;
  svgColor!: ISvgColors;
  // pageHeading = "Numerology";
  numOption = [1,2,3,4,5,6,7,8,9];
  // dateOption = ["Daily", "Weekly", "Monthly", "Yearly"];
  // selectedDateOption = "Daily";
  sectionBrief = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  report: {
    heading: string;
    report: string;
    date: string;
  } = {
    heading: 'Lorem Ipsum',
    date: "Monday 16, 2025",
    report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out."
  }
  // otherOption = ["Life Path", "Ruling", "Personality", "Angel", "Master"]
  showResult = false;
  numerologyForm: FormGroup;
  dobFocused = false;
  trendingTags: ITrendingContainer = {
    heading: "Today’s Lucky Number",
    showPercentage: false,
    checkMore: true,
    tags: [
      {name: "Sagittarius", number: 5}, 
      {name: "Libra", number: 3}, 
      {name: "Sagittarius", number: 5}, 
      {name: "Sagittarius", number: 5}, 
      {name: "Sagittarius", number: 5}, 
      {name: "Sagittarius", number: 5}, 
    ]
  }

  masterCards: {
    name: string;
    brief: string;
    num: number;
    buttonText: string;
  }[] = [
    {
      name: "The Intutive",
      brief: "You will be very enterprising and industrious today. You make your plans very carefully and execute them perfectly. Despite this, your progress may be slow. You will be able to make good use of your time and energy today.",
      num: 11,
      buttonText: "Learn how it affects you",
    },
    {
      name: "Master Builder",
      brief: "You will be very enterprising and industrious today. You make your plans very carefully and execute them perfectly. Despite this, your progress may be slow. You will be able to make good use of your time and energy today.",
      num: 22,
      buttonText: "Learn how it affects you",
    },
    {
      name: "Master Teacher",
      brief: "You will be very enterprising and industrious today. You make your plans very carefully and execute them perfectly. Despite this, your progress may be slow. You will be able to make good use of your time and energy today.",
      num: 33,
      buttonText: "Learn how it affects you",
    },
  ]

  personaliseSection: IPersonalisedContainer = {
    heading: "How to use Numerology in your life",
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

   daySelector: {
    name: string;
    brief: string;
  }[] = [
    {
      name: "Daily",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Weekly",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Monthly",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Yearly",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  typeSelector: {
    name: string;
    brief: string;
  }[] = [
    {
      name: "Life Path Number",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Angle Number",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Master Number",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Ruling Number",
      brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];
  
  constructor(private themeService: ThemeService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private sanitizer: DomSanitizer, private headerService: HeaderService, private responsiveService: ResposiveService) {
    this.numerologyForm = this.fb.group({
      name: ['', Validators.required],
      DOB: ['', Validators.required],
    });
  }
  
  ngOnInit(): void {
    this.loadSvgColors();
    this.route.paramMap.subscribe(params => {
      this.loadFromRouteIfNeeded(params);
    });
    this.svgSantization();
    this.headerService.setColorSubject(false);
    this.headerService.setNavSubject('Numerology');
    this.setThisYear();
  }

  cardResize = effect(() => {
    if(this.responsiveService.extraSmallWidth() || this.responsiveService.xxSmallWidth()) {
      this.menuCard.width = '100%';
    } else {
      this.menuCard.width = '424px'
    }
  });

  formSubmit() {
    if (this.numerologyForm.valid) {
      console.log('form value: ', this.numerologyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  private setThisYear() {
    this.thisYear =  new Date().getFullYear().toString();
  }

  private svgSantization(){
    const s = this.menuCard.svg as string;
    this.menuCard.svg = this.sanitizer.bypassSecurityTrustHtml(s);
  }

  private loadSvgColors(){
    this.svgColor = this.themeService.getSvgColor();
  }

  private loadFromRouteIfNeeded(params: ParamMap){
    const dayParam = params.get('day');
    const typeParam = params.get('type');
    this.showDayInfo = false;
    this.showTypeInfo = false;
    if (dayParam) {
      this.setDay(dayParam);
    } if (typeParam && !this.showDayInfo){
      this.setType(typeParam);
    }
    console.log(this.showDayInfo,this.showTypeInfo)
  }

  private setDay(day: string) {
    const capDay = this.capitalize(day);
    if (this.validDays.includes(capDay)) {
      this.selectedDay = capDay;
      this.showDayInfo = true;
      this.showTypeInfo = false;
      this.pageHeading = `${capDay} Numerology`;
      this.selectedDayBrief = this.daySelector.find(d => d.name === this.selectedDay)?.brief || '';
    }
    else {
      this.selectedDay = '';
      this.pageHeading = "Numerology";
    }
  }

  private setType(type: string) {
    const capType = this.capitalize(type);
    if (this.validTypes.includes(capType)) {
      this.selectedType = capType;
      this.showTypeInfo = true;
      this.showDayInfo = false;
      this.pageHeading = capType;
      this.selectedTypeBrief = this.typeSelector.find(t => t.name === this.selectedType)?.brief || "";
    } else {
      this.selectedType = '';
      this.pageHeading = 'Numerology';
    }
  }

  onDaySelect(day: string) {
    this.router.navigate(['/home/numerology', 'd', day]);
    this.smoothScrolling();
  }
  
  onTypeSelect(type: string) {
    this.router.navigate(['/home/numerology', 't', type]);
    this.smoothScrolling();
  }

  private smoothScrolling():void {
    const element = document.getElementById('header-logo');

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  private capitalize(s: string): string {
    return s.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
    // return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  goToParticular(num: number) {
    if (this.showTypeInfo){
      this.router.navigate(['home/numerology/t',this.selectedType,num])
    }
    else {
      this.router.navigate(['home', 'numerology', num]);
    }
  }

}
