import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IKundliFeatureCard } from '../../../interfaces/ikundli-feature-card';

@Component({
  selector: 'app-kundli-feature-card',
  imports: [
    CommonModule
  ],
  templateUrl: './kundli-feature-card.html',
  styleUrl: './kundli-feature-card.css'
})
export class KundliFeatureCard implements OnInit{
  @Input() card!: IKundliFeatureCard;
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
