import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SectionTag } from "../section-tag/section-tag";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IAboutCard } from '../../interfaces/iabout-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  imports: [
    SectionTag,
    CommonModule
],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
  encapsulation: ViewEncapsulation.None,
})
export class AboutSection implements OnInit {
  @Input() aboutCard!: IAboutCard;
  
  column1Data!: SafeHtml;
  column2Data!: SafeHtml;
  readMore: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.readMoreSet();
    this.sanitizeColumnHTML();
  }

  private readMoreSet() {
    let totalLength = 0;
    if (this.aboutCard.column1) {
      totalLength += this.aboutCard.column1.toString().length;
    }
    if (this.aboutCard.column2) {
      totalLength += this.aboutCard.column2.toString().length;
    }
    console.log(this.aboutCard.title, totalLength)
    if (totalLength < 800) {
      this.readMore = true;
    }
  }

  private sanitizeColumnHTML() {
    this.column1Data = '';
    this.column2Data = '';
    if (this.aboutCard.column1) {
      this.column1Data = this.sanitizer.bypassSecurityTrustHtml(this.aboutCard.column1 as string);
    }
    if (this.aboutCard.column2) {
      this.column2Data = this.sanitizer.bypassSecurityTrustHtml(this.aboutCard.column2 as string);
    }
  }

  toggleReadMore() {
    this.readMore = !this.readMore;
  }

}
