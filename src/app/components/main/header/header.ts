import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { RouterLink } from '@angular/router';
import { TResponsive } from '../../../types/responsive';
import { Menu } from "./menu/menu";

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
export class Header {

  @Input() svgColor!: ISvgColors;
  @Input() showBreadcrumbs: boolean = false;
  @Input() mode: TResponsive = 'large';

  showMenu: boolean = false;
  
  languageOptions: string[] = ['English','Hindi']
  languageDropDownControl = new FormControl<string>(this.languageOptions[0])

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  
}
