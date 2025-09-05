import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderService } from '../../../../services/header.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { INavbarItem } from '../../../../interfaces/inavbar-item';
import { NavbarInfo } from '../navbarInfo';
import { Router } from '@angular/router';
import { TNavigationLink } from '../../../../types/tnavogation-link';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {

  @Output() close = new EventEmitter<void>();

  showBgColor: boolean = true;
  bgColorSubscription!: Subscription;
  navbarItems!: INavbarItem[];

  secondaryMenuOption: {
    selected?: INavbarItem;
    showMenu: boolean;
  } = {
    showMenu: false,
  };

  constructor(private headerService: HeaderService, private router: Router) {}

  ngOnInit(): void {
    this.bgColorSubscription = this.headerService.getColorSubject().subscribe((val: boolean) => {
      this.showBgColor = val;
      console.log("bg", this.showBgColor)
    });
    this.navbarItems = NavbarInfo;
  }

  closeMenu() {
    this.close.emit();
  }

  primaryClick(ind: number) {
    if (this.navbarItems[ind].dropDownPresent) {
      this.secondaryMenuOption.selected = this.navbarItems[ind];
      this.secondaryMenuOption.showMenu = true;
    } else if (this.navbarItems[ind].name == 'Home') {
      this.router.navigate(['home']);
      this.close.emit();
    } else if (this.navbarItems[ind].navigationLink) {
      this.router.navigate([,this.navbarItems[ind].navigationLink]);
      this.close.emit();
    }
  }

  secondaryClick(page: TNavigationLink | null, i: number = -1) {
    const item = this.secondaryMenuOption.selected;
    console.log(page, i)
    console.log(item);
    if (i<0 && page != null){
      this.router.navigate([page]);
    } else if (page == 'numerology' || page == 'horoscope'){
      const subLink = item?.dropDownOption && item?.dropDownOption[i].subLink ? item?.dropDownOption[i].subLink : '';
      this.router.navigate([page, 'd', subLink])
    } else if (page) {
      this.router.navigate([page]);
    }
    this.close.emit();
  }

  backClick() {
    this.secondaryMenuOption.showMenu = false;
  }

}
