import { Component } from '@angular/core';
import { INavbarItem } from '../../../../interfaces/inavbar-item';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

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
    },
    {
      name: 'Kundli Prediction',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: ['Kundli Prediction','opion2'],
      tagSettings: null,
    },
    {
      name: 'Panchang',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: ['Panchang', 'option2'],
      tagSettings: null,
    },
    {
      name: 'Horoscope',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
    },
    {
      name: 'Free Reading',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
    },
    {
      name: 'Numerology',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
    },
    {
      name: 'Tarot',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
    },
    {
      name: 'Live Puja',
      dropDownPresent: false,
      tagPresent: true,
      dropDownOption: null,
      tagSettings: {
        name: 'Watch',
        circleColor: '#E90000',
        eclipseColor: '#FFC2C2'
      },
    },
    {
      name: 'Blogs',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
    },
  ];

  trackByFn(index: number, item: any): any {
    return item.name;
  }

}
