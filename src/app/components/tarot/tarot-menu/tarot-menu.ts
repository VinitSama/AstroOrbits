import { Component, Input, OnInit } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { CommonModule } from '@angular/common';
import { SectionTag } from "../../section-tag/section-tag";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarot-menu',
  imports: [
    CommonModule,
    SectionTag
],
  templateUrl: './tarot-menu.html',
  styleUrl: './tarot-menu.css'
})
export class TarotMenu implements OnInit {
  
  @Input() selectedOption: string = "";
  @Input() svgColor!: ISvgColors;

  menuOption = ["One Card Tarot", "Three Cards", "2025 Tarot", "Major Arcane", "Minor Arcane", "Welness", "Money", "Love","State of Mind","Tarot Style"]

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(11111111111111111111111111111111111111111111);
    console.log(this.selectedOption);
  }

  onOptionClick(option: string) {
    this.router.navigate(['home/tarot', option]);
  }

}
