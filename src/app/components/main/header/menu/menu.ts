import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderService } from '../../../../services/header.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { INavbarItem } from '../../../../interfaces/inavbar-item';
import { NavbarInfo } from '../navbarInfo';

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

  showBgColor$!: any;

  navbarItems!: INavbarItem[];

  constructor(private headerService: HeaderService) {
    this.showBgColor$ = this.headerService.getColorSubject();
  }

  ngOnInit(): void {
    
    this.navbarItems = NavbarInfo;
  }

  closeMenu() {
    this.close.emit();
  }

}
