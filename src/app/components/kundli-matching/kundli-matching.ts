import { Component, OnInit } from '@angular/core';
import { SectionTag } from "../section-tag/section-tag";
import { ISvgColors } from '../../interfaces/isvg-link';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../services/header.service';
import { MenuCard } from "../menu-card-container/menu-card/menu-card";
import { IMenuCard } from '../../interfaces/imenu-card';
import { KundliForm } from "../kundli-form/kundli-form";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

type TGender = 'm' | 'f';

@Component({
  selector: 'app-kundli-matching',
  imports: [
    SectionTag,
    CommonModule,
    MenuCard,
    KundliForm
],
  templateUrl: './kundli-matching.html',
  styleUrl: './kundli-matching.css'
})
export class KundliMatching implements OnInit {

  svgColor!: ISvgColors;
  sectionBrief = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos";

  formsCard: IMenuCard[] = [
    {
      heading: "Boy’s Details",
      sub: "Know your future from the best of horoscope readers.",
      blurColor: "#14A1FF",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.3126 1.08801H20.4806C19.5846 1.08801 18.8806 1.79201 18.8806 2.68801C18.8806 3.58401 19.5846 4.28801 20.4806 4.28801H25.4086L19.5206 10.176C14.9766 6.78401 8.51264 7.10401 4.41664 11.2C-0.0633594 15.68 -0.0633594 23.04 4.41664 27.52C8.89664 32 16.2566 32 20.7366 27.52C24.8326 23.424 25.2166 16.896 21.7606 12.416L27.6486 6.52801V11.52C27.6486 12.416 28.3526 13.12 29.2486 13.12C30.1446 13.12 30.8486 12.416 30.8486 11.52V2.68801C30.9126 1.79201 30.2086 1.08801 29.3126 1.08801ZM18.5606 25.28C15.2966 28.544 9.98464 28.544 6.72064 25.28C3.45664 22.016 3.45664 16.704 6.72064 13.44C9.98464 10.176 15.2966 10.176 18.5606 13.44C21.8246 16.704 21.8246 22.016 18.5606 25.28Z" fill="#240028"/>
</svg>`,
      width: '430px'
    },
    {
      heading: "Girls’s Details",
      sub: "Know your future from the best of horoscope readers.",
      blurColor: "#FB2B3A",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_1268_117)">
    <path d="M23.5165 18.1358C27.6612 13.9925 27.6612 7.25078 23.5165 3.10747C19.3719 -1.0359 12.6282 -1.0359 8.48347 3.10747C4.33884 7.25078 4.33884 13.9925 8.48347 18.1358C10.2378 19.8896 12.4579 20.9008 14.7493 21.1699V24.7276H12.2482C11.5575 24.7276 10.9977 25.2873 10.9977 25.9778C10.9977 26.6682 11.5575 27.228 12.2482 27.228H14.7493V30.7497C14.7494 31.4402 15.3093 31.9999 16 31.9999C16.6907 31.9999 17.2506 31.4402 17.2506 30.7497V27.228H19.7518C20.4425 27.228 21.0023 26.6682 21.0023 25.9778C21.0023 25.2873 20.4425 24.7276 19.7518 24.7276H17.2506V21.17C19.5421 20.9008 21.7622 19.8896 23.5165 18.1358ZM10.2521 16.3677C7.08266 13.1993 7.08266 8.04391 10.2521 4.87547C13.4215 1.70716 18.5784 1.70697 21.748 4.87547C24.9174 8.04391 24.9174 13.1993 21.748 16.3677C18.5785 19.5361 13.4215 19.5361 10.2521 16.3677Z" fill="#240028"/>
  </g>
  <defs>
    <clipPath id="clip0_1268_117">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
      width: '430px'
    },
  ]

  steps: string[] = [
    "Add First Partner’s Details",
    "Add Second Partner’s Details",
    "Generate Kundlies",
    "Match Kundlies",
    "Generate Detailed Report",
  ]

  stepsDone: number = -1;

  constructor(private themeService: ThemeService, private headerService: HeaderService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
   this.loadSvgColor();
   this.headerService.setColorSubject(false); 
   this.formSvgSanitizer();
  }

  private loadSvgColor(): void {
    this.svgColor = this.themeService.getSvgColor();
  }

  private svgSanitizer( svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  private formSvgSanitizer() {
    this.formsCard.forEach(c => {
      c.svg = this.svgSanitizer(c.svg as string);
    });
  }

}
