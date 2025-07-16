import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ILinksGroup } from '../../../interfaces/ilinks-group';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
          url: ""
        },
        {
          text: "About Us",
          url: ""
        },
        {
          text: "Blog",
          url: ""
        },
        {
          text: "Management",
          url: ""
        },
        {
          text: "How it Works",
          url: ""
        },
        {
          text: "Media",
          url: ""
        },
        {
          text: "Awards",
          url: ""
        },
        {
          text: "Privacy Policies",
          url: ""
        },
        {
          text: "FAQs",
          url: ""
        },
        {
          text: "Contact Us",
          url: ""
        },
        {
          text: "Terms and Conditions",
          url: ""
        },
      ]
    },
    {
      heading: 'Important Links',
      links: [
        {
          text: "Home",
          url: ""
        },
        {
          text: "About Us",
          url: ""
        },
        {
          text: "Blog",
          url: ""
        },
        {
          text: "Management",
          url: ""
        },
        {
          text: "How it Works",
          url: ""
        },
        {
          text: "Media",
          url: ""
        },
        {
          text: "Awards",
          url: ""
        },
        {
          text: "Privacy Policies",
          url: ""
        },
        {
          text: "FAQs",
          url: ""
        },
        {
          text: "Contact Us",
          url: ""
        },
        {
          text: "Terms and Conditions",
          url: ""
        },
      ]
    },
    {
      heading: "Horoscope",
      links: [
        {
          text:"Today’s Horoscope",
          url:"",
        },
        {
          text:"Yesterday’s Horoscope",
          url:"",
        },
        {
          text:"Today’s Love Horoscope",
          url:"",
        },
        {
          text:"Management",
          url:"",
        },
        {
          text:"Weekly Horoscope",
          url:"",
        },
        {
          text:"Monthly Horoscope",
          url:"",
        },
      ]
    }
  ]

  trackByFn(index: number, item: any): any {
    return item.name;
  }

}
