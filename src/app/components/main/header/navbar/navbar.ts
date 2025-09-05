import { Component, Input, OnInit } from '@angular/core';
import { INavbarItem } from '../../../../interfaces/inavbar-item';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { TNavigationLink } from '../../../../types/tnavogation-link';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../../../services/header.service';
import { Subscription } from 'rxjs';
import { NavbarInfo } from '../navbarInfo';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  @Input() showColor: boolean = true;
  selected: number = 0;
  navbarItems!: INavbarItem[];
  selectedNavSubscription!: Subscription;

  constructor(private router: Router, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.selectedNavSubscription = this.headerService.getNavSubject().subscribe(i => {
      this.selected = i;
    })
    this.navbarItems = NavbarInfo;
  }

  goToPage(page: TNavigationLink | null, i: number, j: number = -1) {
    if (page == 'home') {
      this.router.navigate([page])
    }
    else if (j<0 && page != null){
      this.router.navigate([page]);
    }
    else if (page == 'numerology' || page == 'horoscope'){
      const subLink = this.navbarItems[i]?.dropDownOption && this.navbarItems[i].dropDownOption[j]
        ? this.navbarItems[i].dropDownOption[j].subLink
        : '';
      this.router.navigate([page, "d", subLink]);
    }
    else if (page){
      this.router.navigate([page]);
    }
  }

  enteredButton = false;
  isMatMenuOpen = false;
  prevButtonTrigger?: MatMenuTrigger;


  buttonEnter(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger !== trigger) {
        this.prevButtonTrigger.closeMenu();
      }
      this.prevButtonTrigger = trigger;
      trigger.openMenu(); 
    });
  }

  buttonLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
      if (!this.isMatMenuOpen && !this.enteredButton) {
        trigger.closeMenu();
      }
    }, 100);
  }

  menuEnter() {
    this.isMatMenuOpen = true;
  }

  menuLeave(trigger: MatMenuTrigger) {
    setTimeout(() => {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
    }, 80);
  }
}
