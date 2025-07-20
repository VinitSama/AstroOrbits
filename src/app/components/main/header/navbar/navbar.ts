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
        },
        {
          name: "Match Making",
          navigationLink: "kundli-matching",
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
        },
        {
          name: "Weekly",
          navigationLink: "horoscope",
        },
        {
          name: "Monthly",
          navigationLink: "horoscope",
        },
        {
          name: "Yearly",
          navigationLink: "horoscope",
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
        },
        {
          name: "Weekly Numerology",
          navigationLink: "numerology",
        },
        {
          name: "Monthly Numerology",
          navigationLink: "numerology",
        },
        {
          name: "Yearly Numerology",
          navigationLink: "numerology",
        },
        {
          name: "Angle Number",
          navigationLink: "numerology",
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
        },
        {
          name: "Shuffle",
          navigationLink: "tarot",
        },
        {
          name: "Love",
          navigationLink: "tarot",
        },
        {
          name: "Career",
          navigationLink: "tarot",
        },
        {
          name: "Fortune",
          navigationLink: "tarot",
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
          navigationLink: "panchang"
        },
        {
          name:"Monthly Pachang",
          navigationLink: "panchang"
        },
        {
          name:"Hora Muhurat",
          navigationLink: "panchang"
        },
        {
          name:"Chodhadiya Muhurat",
          navigationLink: "panchang"
        },
        {
          name:"Sun Rise",
          navigationLink: "panchang"
        },
        {
          name:"Sun Set",
          navigationLink: "panchang"
        },
        {
          name:"Moon Rise",
          navigationLink: "panchang"
        },
        {
          name:"Moon Set",
          navigationLink: "panchang"
        },
        {
          name:"Festivals",
          navigationLink: "panchang"
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
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  trackByFn(index: number, item: any): any {
    return item.name;
  }

  goToPage(page: TNavigationLink | null, i: number) {
    if (page == 'home') {
      this.router.navigate([page])
      this.selected = i;
    }else if (page == 'numerology'){
      this.router.navigate(['home',page,"0","0"])
      this.selected = i;
    } else if (page){
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
