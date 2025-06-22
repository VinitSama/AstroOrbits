import { Component } from '@angular/core';
import { IDropDownOption, INavbarItem } from '../../../../interfaces/inavbar-item';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { TNavigationLink } from '../../../../types/tnavogation-link';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  navbarItems: INavbarItem[] = [         // can be fetch from API for diffrent Navbar for different webpages
    {
      name: 'Free Kundli',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: "kundli" ,
    },
    {
      name: 'Free Kundli Matching',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Free Kundli Matching",
          navigationLink: "kundli-matching",
        },
        {
          name: "Option2",
          navigationLink: null,
        },
      ],
      tagSettings: null,
      navigationLink: null,
    },
    {
      name: "Today's Panchang",
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: "panchang",
    },
    {
      name: 'Horoscope',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: "horoscope",
    },
    {
      name: 'Mantras',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: "mantras",
    },
    {
      name: 'Numerology',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: null,
    },
    {
      name: 'Tarot',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: null,
    },
    {
      name: 'Love Calculator',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: "love-calculator",
      // tagSettings: {
      //   name: 'Watch',
      //   circleColor: '#E90000',
      //   eclipseColor: '#FFC2C2'
      // },
    },
    {
      name: 'Blogs',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: null,
    },
  ];

  constructor(private router: Router) {}

  trackByFn(index: number, item: any): any {
    return item.name;
  }

  goToPage(page: TNavigationLink | null) {
    if (page){
      this.router.navigate(['home', page]);
    }
  }

  openedDropdown: number | null = null;

  toggleDropdown(index: number): void {
    this.openedDropdown = this.openedDropdown === index ? null : index;
  }

  selectDropdownOption(option: IDropDownOption): void {
    this.openedDropdown = null; // close dropdown
    this.goToPage(option.navigationLink);
  }

}
