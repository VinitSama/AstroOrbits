import { Component } from '@angular/core';
import { SectionTag } from "../../section-tag/section-tag";
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ThemeService } from '../../../services/theme.service';
import { CommonModule } from '@angular/common';
import { KundliBasicDetails } from "./kundli-basic-details/kundli-basic-details";
import { KundliPrediction } from "./kundli-prediction/kundli-prediction";
import { Dashaa } from "./dashaa/dashaa";
import { Remedies } from "./remedies/remedies";
import { BlogSection } from "../../blog-section/blog-section";
import { PositionOfPlanets } from '../../position-of-planets/position-of-planets';
import { Doshas } from '../../doshas/doshas';
import { Charts } from '../../charts/charts';

@Component({
  selector: 'app-kundli-result',
  imports: [
    SectionTag,
    CommonModule,
    KundliBasicDetails,
    KundliPrediction,
    Dashaa,
    Remedies,
    BlogSection,
    PositionOfPlanets,
    Doshas,
    Charts
],
  templateUrl: './kundli-result.html',
  styleUrl: './kundli-result.css'
})
export class KundliResult {

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
      title: "Kundli Prediction",
      opened: false,
    },
    {
      id: 2,
      title: "Posiltion of Planets",
      opened: false,
    },
    {
      id: 3,
      title: "Chart",
      opened: false,
    },
    {
      id: 4,
      title: "Doshas",
      opened: false,
    },
    {
      id: 5,
      title: "Dashaa",
      opened: false,
    },
    {
      id: 6,
      title: "Remedies",
      opened: false,
    },
  ]

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
