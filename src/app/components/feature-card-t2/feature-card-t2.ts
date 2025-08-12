import { Component, Input, OnInit } from '@angular/core';
import { IFeatureCardT2 } from '../../interfaces/ifeature-card-t2';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card-t2',
  imports: [
    CommonModule
  ],
  templateUrl: './feature-card-t2.html',
  styleUrl: './feature-card-t2.css'
})
export class FeatureCardT2 implements OnInit{
  @Input() card!: IFeatureCardT2;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizeSvg();
  }

  private sanitizeSvg() {
    if (this.card.svg && this.card.svg != undefined){
      this.card.svg = this.sanitizer.bypassSecurityTrustHtml(this.card.svg as string);
    }
  }
}
