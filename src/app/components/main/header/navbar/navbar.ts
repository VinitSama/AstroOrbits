import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDropDownOption, INavbarItem } from '../../../../interfaces/inavbar-item';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { TNavigationLink } from '../../../../types/tnavogation-link';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() showColor: boolean = true;
  hoveredIndex: number | null = null;
  selected: number = 0;
  navbarItems: INavbarItem[] = [         // can be fetch from API for diffrent Navbar for different webpages
    // {
    //   name: 'Free Kundli',
    //   dropDownPresent: false,
    //   tagPresent: false,
    //   dropDownOption: null,
    //   tagSettings: null,
    //   navigationLink: "kundli" ,
    // },
    {
      name: 'Home',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: "home" ,
    },
    {
      name: 'Kundli',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Free Kundli",
          navigationLink: "kundli",
          subLink: "",
        },
        {
          name: "Match Making",
          navigationLink: "kundli-matching",
          subLink: ""
        },
      ],
      tagSettings: null,
      navigationLink: null,
    },
    {
      name: 'Horoscope',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Daily",
          navigationLink: "horoscope",
          subLink: "Daily"
        },
        {
          name: "Weekly",
          navigationLink: "horoscope",
          subLink: "Weekly"
        },
        {
          name: "Monthly",
          navigationLink: "horoscope",
          subLink: "Monthly"
        },
        {
          name: "Yearly",
          navigationLink: "horoscope",
          subLink: "Yearly"
        },
      ],
      tagSettings: null,
      navigationLink: null,
    },
    {
      name: 'Numerology',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Daily Numerology",
          navigationLink: "numerology",
          subLink: "Daily"
        },
        {
          name: "Weekly Numerology",
          navigationLink: "numerology",
          subLink: "Weekly"
        },
        {
          name: "Monthly Numerology",
          navigationLink: "numerology",
          subLink: "Monthly"
        },
        {
          name: "Yearly Numerology",
          navigationLink: "numerology",
          subLink: "Yearly"
        },
        {
          name: "Angle Number",
          navigationLink: "numerology",
          subLink: "Angle"
        },
      ],
      tagSettings: null,
      navigationLink: "numerology",
    },
    {
      name: 'Tarot Reading',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Daily",
          navigationLink: "tarot",
          subLink: "Daily"
        },
        {
          name: "Shuffle",
          navigationLink: "tarot",
          subLink: "Shuffle"
        },
        {
          name: "Love",
          navigationLink: "tarot",
          subLink: "Love"
        },
        {
          name: "Career",
          navigationLink: "tarot",
          subLink: "Career"
        },
        {
          name: "Fortune",
          navigationLink: "tarot",
          subLink: "Fortune"
        },
      ],
      tagSettings: null,
      navigationLink: null,
    },
    {
      name: "Panchang",
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name:"Today's Pachang",
          navigationLink: "panchang",
          subLink: "Today"
        },
        {
          name:"Monthly Pachang",
          navigationLink: "panchang",
          subLink: "Monthly"
        },
        {
          name:"Hora Muhurat",
          navigationLink: "panchang",
          subLink: "Hora Muhurat"
        },
        {
          name:"Chodhadiya Muhurat",
          navigationLink: "panchang",
          subLink: "Chodhadiya Muhurat"
        },
        {
          name:"Sun Rise",
          navigationLink: "panchang",
          subLink: "Sun Rise"
        },
        {
          name:"Sun Set",
          navigationLink: "panchang",
          subLink: "Sun Set"
        },
        {
          name:"Moon Rise",
          navigationLink: "panchang",
          subLink: "Moon Rise"
        },
        {
          name:"Moon Set",
          navigationLink: "panchang",
          subLink: "Moon Set"
        },
        {
          name:"Festivals",
          navigationLink: "panchang",
          subLink: "Festivals"
        },
      ],
      tagSettings: null,
      navigationLink: null,
    },
    // {
    //   name: 'Mantras',
    //   dropDownPresent: false,
    //   tagPresent: false,
    //   dropDownOption: null,
    //   tagSettings: null,
    //   navigationLink: "mantras",
    // },   
    {
      name: 'Calculator',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Love Calculator",
          navigationLink: "love-calculator",
          subLink: "Love Calculator",
        },
        {
          name: "Rudraksh Calculator",
          navigationLink: "rudraksh-calculator",
          subLink: "Rudraksh Calculator",
        },
      ],
      tagSettings: null,
      navigationLink: null,
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
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  goToPage(page: TNavigationLink | null, i: number, j: number = -1) {
    if (page == 'home') {
      this.router.navigate([page])
      this.selected = i;
        }
        else if (page == 'numerology'){
      const subLink = this.navbarItems[i]?.dropDownOption && this.navbarItems[i].dropDownOption[j]
        ? this.navbarItems[i].dropDownOption[j].subLink
        : '';
      this.router.navigate(['home', page, "d", subLink]);
      this.selected = i;
        }
        else if (page == 'horoscope'){
      const subLink = this.navbarItems[i]?.dropDownOption && this.navbarItems[i].dropDownOption[j]
        ? this.navbarItems[i].dropDownOption[j].subLink
        : '';
      this.router.navigate(['home', page, "d", subLink]);
      this.selected = i;
        }
        else if (page){
      this.router.navigate(['home', page]);
      this.selected = i;
    }
  }

  openedDropdown: number | null = null;

  closeFn() {
    this.close.emit();
    this.hoveredIndex = null;
  }




  activeTrigger: MatMenuTrigger | null = null;

  openMenu(trigger: MatMenuTrigger) {
  if (this.activeTrigger && this.activeTrigger !== trigger) {
    this.activeTrigger.closeMenu();
    setTimeout(() => {
      trigger.openMenu();
      this.activeTrigger = trigger;
    }, 50);
  } else {
    trigger.openMenu();
    this.activeTrigger = trigger;
  }
}

onMenuClosed(trigger: MatMenuTrigger) {
  if (this.activeTrigger === trigger) {
    this.activeTrigger = null;
    this.openedDropdown = -1;
  }
}

handleHover(index: number, trigger: MatMenuTrigger) {
  if (this.openedDropdown !== null) {
    this.openMenu(trigger);
    this.openedDropdown = index;
  }
}

}
