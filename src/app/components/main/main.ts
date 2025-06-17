import { Component, OnInit } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    Header,
    Footer,
    CommonModule,
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnInit {

  svgColor!: ISvgColors;

  private themeUpdateSubscription!: Subscription; 

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSVGColor();
    this.themeUpdateSubscription = this.themeService.getThemeSubject().subscribe(()=>{
      this.loadSVGColor();
    })
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

}
