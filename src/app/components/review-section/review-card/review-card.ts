import { Component, Input } from '@angular/core';
import { IReview } from '../../../interfaces/ireview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-card',
  imports: [
    CommonModule
  ],
  templateUrl: './review-card.html',
  styleUrl: './review-card.css'
})
export class ReviewCard {
  @Input() card!: IReview;
}
