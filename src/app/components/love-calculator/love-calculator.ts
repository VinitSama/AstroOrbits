import { CommonModule } from '@angular/common';
import { Component, effect, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { SectionTag } from "../section-tag/section-tag";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuCard } from "../menu-card-container/menu-card/menu-card";
import { IMenuCard } from '../../interfaces/imenu-card';
import { DomSanitizer } from '@angular/platform-browser';
import { RudrakshSection } from "../rudraksh-section/rudraksh-section";
import { AstrologySection } from "../astrology-section/astrology-section";
import { AboutSection } from "../about-section/about-section";
import { FAQSection } from "../faq-section/faq-section";
import { ILoveProfile, INameDob } from '../../interfaces/ilove-profile';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { ResultProgress } from "../result-progress/result-progress";
import { FeatureCardT1 } from "../feature-card-t1/feature-card-t1";
import { IFeatureCard } from '../../interfaces/ifeature-card';
import { IProgressCard } from '../../interfaces/iprogress-card';
import { ResposiveService } from '../../services/resposive.service';
import { SeoService } from '../../services/seo.service';
import { IAboutCard } from '../../interfaces/iabout-card';
import { loveCalculatorAboutCard, loveCalculatorFaqCards } from './love-calculator-about';
import { IFAQCard } from '../../interfaces/ifaq-card';

type TFormOption = 'User' | 'Partner';
type TGender = "m" | "f";

@Component({
  selector: 'app-love-calculator',
  imports: [
    CommonModule,
    SectionTag,
    MenuCard,
    ReactiveFormsModule,
    RudrakshSection,
    AstrologySection,
    AboutSection,
    FAQSection,
    ResultProgress,
    FeatureCardT1
],
  templateUrl: './love-calculator.html',
  styleUrl: './love-calculator.css'
})
export class LoveCalculator implements OnInit {


  sectionBrief = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos";

  submitted: boolean = false;
  boyForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });
  girlForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });
  menuCard: IMenuCard[] = [
    {
      heading: 'Boy’s Details',
      sub: 'Know your future from the best of horoscope readers.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.3107 1.08801H20.4787C19.5827 1.08801 18.8787 1.79201 18.8787 2.68801C18.8787 3.58401 19.5827 4.28801 20.4787 4.28801H25.4067L19.5187 10.176C14.9747 6.78401 8.51069 7.10401 4.41469 11.2C-0.0653125 15.68 -0.0653125 23.04 4.41469 27.52C8.89469 32 16.2547 32 20.7347 27.52C24.8307 23.424 25.2147 16.896 21.7587 12.416L27.6467 6.52801V11.52C27.6467 12.416 28.3507 13.12 29.2467 13.12C30.1427 13.12 30.8467 12.416 30.8467 11.52V2.68801C30.9107 1.79201 30.2067 1.08801 29.3107 1.08801ZM18.5587 25.28C15.2947 28.544 9.98269 28.544 6.71869 25.28C3.45469 22.016 3.45469 16.704 6.71869 13.44C9.98269 10.176 15.2947 10.176 18.5587 13.44C21.8227 16.704 21.8227 22.016 18.5587 25.28Z" fill="#240028"/>
</svg>`,
      blurColor: '#14A1FF',
      width: '430px',
    },
    {
      heading: 'Girl’s Details',
      sub: 'Know your future from the best of horoscope readers.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_1444_1058)">
    <path d="M23.5165 18.1358C27.6612 13.9925 27.6612 7.25078 23.5165 3.10747C19.3719 -1.0359 12.6282 -1.0359 8.48347 3.10747C4.33884 7.25078 4.33884 13.9925 8.48347 18.1358C10.2378 19.8896 12.4579 20.9008 14.7493 21.1699V24.7276H12.2482C11.5575 24.7276 10.9977 25.2873 10.9977 25.9778C10.9977 26.6682 11.5575 27.228 12.2482 27.228H14.7493V30.7497C14.7494 31.4402 15.3093 31.9999 16 31.9999C16.6907 31.9999 17.2506 31.4402 17.2506 30.7497V27.228H19.7518C20.4425 27.228 21.0023 26.6682 21.0023 25.9778C21.0023 25.2873 20.4425 24.7276 19.7518 24.7276H17.2506V21.17C19.5421 20.9008 21.7622 19.8896 23.5165 18.1358ZM10.2521 16.3677C7.08266 13.1993 7.08266 8.04391 10.2521 4.87547C13.4215 1.70716 18.5784 1.70697 21.748 4.87547C24.9174 8.04391 24.9174 13.1993 21.748 16.3677C18.5785 19.5361 13.4215 19.5361 10.2521 16.3677Z" fill="#240028"/>
  </g>
  <defs>
    <clipPath id="clip0_1444_1058">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
      blurColor: '#FB2B3A',
      width: '430px',
    },
  ]
  boyDobFocused: boolean = false;
  girlDobFocused: boolean = false;
  showReport: boolean = false;
  profile!: ILoveProfile;
  reportCard: IProgressCard = {
    score: 80,
    subHeading: "Love Compatibility",
    ringSetting: {
      size: '302px',
      presetColor: "#79367F",
      bgWidth: '15',
      width: "12",
    },
    scoreColor: "#fff",
    subColor: "#fff",
    scoreFSize: "32px",
    subFSize: "9px",
    menuCard: false,
  }
  resultFeatureCard: IFeatureCard = {
    title: "Result",
    brief: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M5.95964 1.08331C4.76867 1.08331 3.79297 2.05902 3.79297 3.24998V22.75C3.79297 23.9409 4.76867 24.9166 5.95964 24.9166H20.043C21.2339 24.9166 22.2096 23.9409 22.2096 22.75V7.04165H17.8763C16.9854 7.04165 16.2513 6.30753 16.2513 5.41665V1.08331H5.95964ZM17.3346 1.08331V5.41665C17.3346 5.7261 17.5668 5.95831 17.8763 5.95831H21.9113C21.9475 5.92589 17.3346 1.08331 17.3346 1.08331ZM13.6646 10.4461L14.5872 13.0127L17.3167 13.1026C17.8232 13.1203 18.0303 13.7613 17.6298 14.0717L15.4727 15.7422L16.2302 18.3627C16.3718 18.8501 15.8249 19.2469 15.405 18.9615L13.1484 17.4264L10.8875 18.9562C10.4678 19.2397 9.92292 18.8438 10.0634 18.3574L10.8262 15.7379L8.67115 14.0622C8.27171 13.7504 8.4809 13.1103 8.98747 13.0941L11.717 13.0095L12.6448 10.444C12.7201 10.2365 12.9139 10.0955 13.1566 10.0967C13.3994 10.0978 13.5907 10.2395 13.6646 10.4461ZM13.1537 12.2245L12.6099 13.7236C12.5346 13.9322 12.3397 14.0739 12.1179 14.0812L10.5226 14.1299L11.7815 15.1095C11.9566 15.2455 12.0312 15.4743 11.9698 15.6872L11.5234 17.217L12.8447 16.3241C13.0284 16.1996 13.2694 16.1996 13.4531 16.3241L14.7723 17.2212L14.329 15.6904C14.2674 15.4769 14.3425 15.2475 14.5184 15.1117L15.7795 14.1352L14.1841 14.0823C13.9623 14.0749 13.7674 13.9333 13.6922 13.7247L13.1537 12.2245Z" fill="#FFB114"/>
</svg>`,
    svgBg: "#FFF1D6",
    svgSettings: {
      padding: "12px",
    }
  }
  aboutCard!: IAboutCard;
  faqCards!: IFAQCard[];

  constructor(private headerService: HeaderService, private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private formService: FormService, private responsiveService: ResposiveService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateTags({
      title: "Love Calculator | Relationship Compatibility at Astroorbits",
      description: "Calculate your love compatibility using Astroorbits Love Calculator. Accurate relationship insights based on astrology and numerology for couples.",
      keywords: "love calculator, relationship compatibility, love match, astrology love calculator, relationship calculator",
      ogTitle: "Love Calculator | Relationship Compatibility at Astroorbits",
      ogDescription: "Assess your love compatibility accurately with the Astroorbits Love Calculator. Expert-based relationship insights available now."
    })
    this.headerService.setColorSubject(false);
    this.headerService.setNavSubject('Calculator');
    this.svgSanitizer();
    this.route.paramMap.subscribe((params) => {
      this.setShowReport(params);
      if (this.showReport) {
        this.getForm();
        console.log(this.profile);
      }
    })
    this.aboutCard = loveCalculatorAboutCard;
    this.faqCards = loveCalculatorFaqCards;
  }

  modeSelector = effect(() => {
    if (this.responsiveService.largeWidth() || this.responsiveService.extraLargeWidth() || this.responsiveService.xxLargeWidth()) {
      this.cardWidthSetter('430px');
    } else {
      this.cardWidthSetter('100%');
    }
  });

  private cardWidthSetter(width: string) {
    this.menuCard.forEach(c => {
      c.width = width;
    })
  }

  private setShowReport(params: ParamMap) {
    const val = params.get('show');
    this.showReport = val? true: false;
  }

  private svgSanitizer() {
    this.menuCard.forEach( c => {
      c.svg = this.sanitizer.bypassSecurityTrustHtml(c.svg as string);
    })
  }
  
  private getForm() {
    this.profile = this.formService.getLoveData();
  }

  get formB() {
    return this.boyForm.controls;
  }
  
  get formG() {
    return this.girlForm.controls;
  }

  toggleDatePicker(input: HTMLInputElement, event: MouseEvent): void {
    event.stopPropagation();
    if (this.boyDobFocused || this.girlDobFocused) {
      input.blur();
    } else {
      input.focus();
      setTimeout(() => input.showPicker(), 0);
    }
  }

  submitForm() {
    this.submitted = true;
    const boyF = this.patchForm(this.boyForm);
    const girlF = this.patchForm(this.girlForm);
    if (this.validForm(boyF) && this.validForm(girlF)){
      const loveProfile: ILoveProfile = {
        boy: boyF,
        girl: girlF
      };
      this.formService.setLoveData(loveProfile);
      this.router.navigate(['love-calculator/r',true]);
    }
    
  }

  private validForm(form: INameDob): boolean {
    if (!form.name || !form.dob) {
      return false;
    }
    const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobPattern.test(form.dob)) {
      return false;
    }
    const date = new Date(form.dob);
    if (isNaN(date.getTime())) {
      return false;
    }
    const [year, month, day] = form.dob.split('-').map(Number);
    if (
      date.getUTCFullYear() !== year ||
      date.getUTCMonth() + 1 !== month ||
      date.getUTCDate() !== day
    ) {
      return false;
    }
    return true;
  }

  patchForm(formGroup: FormGroup): INameDob {
    return {
      name: formGroup.get('name')?.value ?? '',
      dob: formGroup.get('dob')?.value ?? ''
    };
  }

}
