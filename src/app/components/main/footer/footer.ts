import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ILinksGroup } from '../../../interfaces/ilinks-group';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  @Input() svgColor!: ISvgColors;
  
  address = "55, Ganga Test Centre, Devasree Complex, 88, Thatipudi, Bidar, Karnataka, Pincode-568649"

  linkGroups: ILinksGroup[] = [
    {
      heading: 'Quick Links',
      links: [
        {
          text: "Home",
          url: "home"
        },
        {
          text: "About Us",
        },
        {
          text: "Blog",
        },
        {
          text: "Management",
        },
        {
          text: "How it Works",
        },
        {
          text: "Media",
        },
        {
          text: "Awards",
        },
        {
          text: "Privacy Policies",
        },
        {
          text: "FAQs",
        },
        {
          text: "Contact Us",
        },
        {
          text: "Terms and Conditions",
        },
      ]
    },
    {
      heading: 'Important Links',
      links: [
        {
          text: "Home",
          url: "home"
        },
        {
          text: "About Us",
        },
        {
          text: "Blog",
        },
        {
          text: "Management",
        },
        {
          text: "How it Works",
        },
        {
          text: "Media",
        },
        {
          text: "Awards",
        },
        {
          text: "Privacy Policies",
        },
        {
          text: "FAQs",
        },
        {
          text: "Contact Us",
        },
        {
          text: "Terms and Conditions",
        },
      ]
    },
    {
      heading: "Horoscope",
      links: [
        {
          text:"Today’s Horoscope",
        },
        {
          text:"Yesterday’s Horoscope",
        },
        {
          text:"Today’s Love Horoscope",
        },
        {
          text:"Management",
        },
        {
          text:"Weekly Horoscope",
        },
        {
          text:"Monthly Horoscope",
        },
      ]
    }
  ]

  constructor(private router: Router) {}

  goTo(url: string) {
    if (url == "home"){ 
      this.router.navigate(['home/']);
    } else {
      this.router.navigate([url]);
    }
  }

}
