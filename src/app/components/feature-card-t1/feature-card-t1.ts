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
    this.svgSanitization();
  }

  private svgSanitization(){
    if (this.card.svg) {
      const svg = this.card.svg as string;
      this.card.svg = this.sanitizer.bypassSecurityTrustHtml(svg);
    }
  }

  onClick() {
    if (this.card.outputId) {
      this.clickLinkEmitter.emit(this.card.outputId);
    }
  }

}
