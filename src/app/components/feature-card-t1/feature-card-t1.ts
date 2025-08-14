import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFeatureCard } from '../../interfaces/ifeature-card';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-feature-card-t1',
  imports: [
    CommonModule
  ],
  templateUrl: './feature-card-t1.html',
  styleUrl: './feature-card-t1.css'
})
export class FeatureCardT1 {
  @Input() card!: IFeatureCard;
  @Input() boldClick: boolean = false;
  @Output() clickLinkEmitter = new EventEmitter<number>();

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    this.sanitizeSvg();
    if (!this.card.svgSettings) {
      this.card.svgSettings = {
        padding: '8px',
      };
    }
  }

  
  private sanitizeSvg() {
    if (this.card.svg && this.card.svg != undefined){
      this.card.svg = this.sanitizer.bypassSecurityTrustHtml(this.card.svg as string);
    }
  }

  onClick() {
    if (this.card.outputId) {
      this.clickLinkEmitter.emit(this.card.outputId);
    }
  }

}
