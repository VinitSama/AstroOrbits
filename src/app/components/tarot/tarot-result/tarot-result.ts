import { Component, Input, OnInit } from '@angular/core';
import { ITarotResponse } from '../../../interfaces/itarot-response';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ThemeService } from '../../../services/theme.service';
import { CommonModule } from '@angular/common';
import { SectionTag } from "../../section-tag/section-tag";
import { TarotMenu } from "../tarot-menu/tarot-menu";
import { BlogSection } from "../../blog-section/blog-section";

@Component({
  selector: 'app-tarot-result',
  imports: [
    CommonModule,
    SectionTag,
    TarotMenu,
    BlogSection
],
  templateUrl: './tarot-result.html',
  styleUrl: './tarot-result.css'
})
export class TarotResult implements OnInit {
  @Input() cards!: ITarotResponse[];
  @Input() cardNumber!: 1 | 3;
  @Input() heading!: string;
  svgColor!: ISvgColors;
  selectedOption!: string;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSvgColor();

  }

  private loadSvgColor() {
    this.svgColor = this.themeService.getSvgColor();
    this.selectedOption = this.heading;
    if (this.heading != "Major Arcane" && this.heading != "Minor Arcane"){
      this.heading = "Your" + this.heading + "Reading";
    }
    this.cards.forEach(c => {
      c.imageURL = `url(${c.imageURL})`;
    });
  }
}
