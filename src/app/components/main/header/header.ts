import { Component, Input, OnInit } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { RouterLink } from '@angular/router';
import { TResponsive } from '../../../types/responsive';
import { Menu } from "./menu/menu";
import { HeaderService } from '../../../services/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    Navbar,
    CommonModule,
    ReactiveFormsModule,
    Breadcrumbs,
    RouterLink,
    Menu
],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit{

  @Input() svgColor!: ISvgColors;
  @Input() mode: TResponsive = 'large';

  showColor: boolean = true;
  showMenu: boolean = false;
  languageOptions: string[] = ['English','Hindi']
  languageDropDownControl = new FormControl<string>(this.languageOptions[0])

  showColorSubscription!: Subscription;

  constructor(private headerService: HeaderService) {  }

  ngOnInit(): void {
    this.showColorSubscription = this.headerService.getColorSubject().subscribe((val) =>{
      this.showColor = val;
    })
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  
}
