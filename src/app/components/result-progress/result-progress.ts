import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-progress',
  imports: [
    CommonModule
  ],
  templateUrl: './result-progress.html',
  styleUrl: './result-progress.css'
})
export class ResultProgress implements OnInit {
  
  @Input() score: number = 0;
  @Input() subHeading: string = '';

  readonly radius = 45;
  readonly circumference = 2 * Math.PI * this.radius;
  color = '#ff0000';
  progressOffset = this.circumference;

  ngOnInit(): void {
    this.progressOffset = this.circumference;
    this.color = this.getColor(0);
      setTimeout(() => {
      this.progressOffset = this.getStrokeDashOffset(this.score);
      this.color = this.getColor(this.score);
    }, 100);
    this.color = this.getColor(this.score);
    console.log(this.color)
  }

  getStrokeDashOffset(score: number): number {
    return this.circumference - (score / 100) * this.circumference;
  }

  getColor(score: number, bias: number = 80): string {
    if (score >= bias) {
      return '#00FF00'; // Solid green
    }

    // Define color stops
    const stops = [
      { pct: 0, color: [255, 0, 0] },      // Red
      { pct: 25, color: [255, 165, 0] },   // Orange
      { pct: 50, color: [255, 255, 0] },   // Yellow
      { pct: bias, color: [0, 255, 0] },     // Green
    ];

    // Find the two stops score lies between
    for (let i = 0; i < stops.length - 1; i++) {
      const lower = stops[i];
      const upper = stops[i + 1];

      if (score >= lower.pct && score < upper.pct) {
        const range = upper.pct - lower.pct;
        const rangePct = (score - lower.pct) / range;

        const r = Math.round(lower.color[0] + rangePct * (upper.color[0] - lower.color[0]));
        const g = Math.round(lower.color[1] + rangePct * (upper.color[1] - lower.color[1]));
        const b = Math.round(lower.color[2] + rangePct * (upper.color[2] - lower.color[2]));

        return `rgb(${r}, ${g}, ${b})`;
      }
    }

    return '#00FF00'; // Fallback
  }
}
