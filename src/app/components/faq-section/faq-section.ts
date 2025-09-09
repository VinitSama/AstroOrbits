import { Component, computed, Input } from '@angular/core';
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

  @Input() cards!: IFAQCard[];

  constructor(private responsiveService: ResposiveService) {}

  modeSelector = computed(() => {
    if (this.responsiveService.xxSmallWidth() || this.responsiveService.extraSmallWidth()) {
      return 'small';
    } else{
      return 'large';
    }
  })

}
