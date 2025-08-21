import { Component, Input, OnInit } from '@angular/core';
import { IDropDownOption, INavbarItem } from '../../../../interfaces/inavbar-item';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { TNavigationLink } from '../../../../types/tnavogation-link';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../../../services/header.service';
import { Subscription } from 'rxjs';
import { NavbarInfo } from '../navbarInfo';

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
      this.router.navigate(['home', page]);
    }
    else if (page == 'numerology' || page == 'horoscope'){
      const subLink = this.navbarItems[i]?.dropDownOption && this.navbarItems[i].dropDownOption[j]
        ? this.navbarItems[i].dropDownOption[j].subLink
        : '';
      this.router.navigate(['home', page, "d", subLink]);
    }
    else if (page){
      this.router.navigate(['home', page]);
    }
  }

  enteredButton = false;
  isMatMenuOpen = false;
  prevButtonTrigger?: MatMenuTrigger;


  buttonEnter(trigger: MatMenuTrigger) {
    // setTimeout(() => {
    //   if(this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
    //     this.prevButtonTrigger.closeMenu();
    //     this.prevButtonTrigger = trigger;
    //     this.isMatMenuOpen = false;
    //     trigger.openMenu();
    //     this.ren.removeClass(trigger?.menu?.items?.first['_elementRef'].nativeElement, 'cdk-focused');
    //     this.ren.removeClass(trigger?.menu?.items?.first['_elementRef'].nativeElement, 'cdk-program-focused');
    //   } else if (!this.isMatMenuOpen) {
    //     this.enteredButton = true;
    //     this.prevButtonTrigger = trigger;
    //     trigger.openMenu();
    //     this.ren.removeClass(trigger?.menu?.items?.first['_elementRef'].nativeElement, 'cdk-focused');
    //     this.ren.removeClass(trigger?.menu?.items?.first['_elementRef'].nativeElement, 'cdk-program-focused');
    //   }  else {
    //     this.enteredButton = true;
    //     this.prevButtonTrigger = trigger
    //   }
    // });

    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger !== trigger) {
        this.prevButtonTrigger.closeMenu();
      }
      this.prevButtonTrigger = trigger;
      
      // Corrected call with no arguments
      trigger.openMenu(); 
    });
  }

  buttonLeave(trigger: MatMenuTrigger) {
    // setTimeout(() => {
    //   if (this.enteredButton && !this.isMatMenuOpen) {
    //     trigger.closeMenu();
    //     this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
    //     this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
    //   } if (!this.isMatMenuOpen) {
    //     trigger.closeMenu();
    //     this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
    //     this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
    //   } else {
    //     this.enteredButton = false;
    //   }
    // }, 100);

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
    // setTimeout(() => {
    //   if (!this.enteredButton) {
    //     this.isMatMenuOpen = false;
    //     trigger.closeMenu();
    //     this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
    //     this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
    //   } else {
    //     this.isMatMenuOpen = false;
    //   }
    // }, 80);

    setTimeout(() => {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
    }, 80);
  }
}
