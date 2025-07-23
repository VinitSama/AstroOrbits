import { Component, Input, OnInit } from '@angular/core';
import { MenuCard } from "../../menu-card/menu-card";
import { IMenuCard } from '../../../../interfaces/imenu-card';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-numerology-menu-card',
  imports: [
    MenuCard,
    ReactiveFormsModule
  ],
  templateUrl: './numerology-menu-card.html',
  styleUrl: './numerology-menu-card.css'
})
export class NumerologyMenuCard implements OnInit {
  @Input() width: string = "100%";
  card: IMenuCard = {
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
    heading: "Numberology",
    sub: "Ask the numbers what they hold in your fututre.",
    blurColor: "#004613",
  };

  numerologyForm: FormGroup;
  tobFocused: boolean = false;

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) {
    this.numerologyForm = this.fb.group({
      TOB: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.svgSantization();
    this.card.width = this.width;
  }

  private svgSantization(){
    const s = this.card.svg as string;
    this.card.svg = this.sanitizer.bypassSecurityTrustHtml(s);
  }

  numerologySubmit(){
    if (this.numerologyForm.valid) {
      console.log('form value: ', this.numerologyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
