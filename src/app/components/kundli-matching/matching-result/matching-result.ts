import { Component, OnInit } from '@angular/core';
import { SectionTag } from "../../section-tag/section-tag";
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { BlogSection } from "../../blog-section/blog-section";
import { MatchingBasicDetails } from "./matching-basic-details/matching-basic-details";
import { PositionOfPlanets } from "../../position-of-planets/position-of-planets";
import { Doshas } from "../../doshas/doshas";
import { Charts } from "../../charts/charts";

@Component({
  selector: 'app-matching-result',
  imports: [
    SectionTag,
    CommonModule,
    BlogSection,
    MatchingBasicDetails,
    PositionOfPlanets,
    Doshas,
    Charts
],
  templateUrl: './matching-result.html',
  styleUrl: './matching-result.css'
})
export class MatchingResult implements OnInit {
  
  svgColor!: ISvgColors;

  resultPageTitle = "Your Kundli";

  nowOpened: number = 0;

  resultPageOptions: {
    id: number,
    title: string,
    opened: boolean,
  }[] = [
    {
      id: 0,
      title: "Basic Details",
      opened: true,
    },
    {
      id: 1,
      title: "Dosha",
      opened: false,
    },
    {
      id: 2,
      title: "Planet Details",
      opened: false,
    },
    {
      id: 3,
      title: "Lagna Chart",
      opened: false,
    },
  ];

  blogSectionHeading = "You may also like";
  
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSVGColor();
  }

  private loadSVGColor() {
    this.svgColor = this.themeService.getSvgColor();
  }

  optionClick(id: number) {
    this.resultPageOptions[this.nowOpened].opened=false;
    this.resultPageOptions[id].opened=true;
    this.nowOpened = id;
  }

}
