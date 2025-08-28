import { Component, computed } from '@angular/core';
import { SectionTag } from "../section-tag/section-tag";
import { CommonModule } from '@angular/common';
import { IFAQCard } from '../../interfaces/ifaq-card';
import { FAQCard } from "./faq-card/faq-card";
import { ResposiveService } from '../../services/resposive.service';

@Component({
  selector: 'app-faq-section',
  imports: [
    SectionTag,
    CommonModule,
    FAQCard
],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css'
})
export class FAQSection {

  cards: IFAQCard[] = [
    {
      ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ]

  constructor(private responsiveService: ResposiveService) {}

  modeSelector = computed(() => {
    if (this.responsiveService.xxSmallWidth() || this.responsiveService.extraSmallWidth()) {
      console.log('small')
      return 'small';
    } else{
      console.log('large')
      return 'large';
    }
  })

}
