import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTag } from '../section-tag/section-tag';
import { ReviewCard } from "./review-card/review-card";
import { IReview } from '../../interfaces/ireview';

@Component({
  selector: 'app-review-section',
  imports: [
    CommonModule,
    SectionTag,
    ReviewCard
],
  templateUrl: './review-section.html',
  styleUrl: './review-section.css'
})
export class ReviewSection {
  cards: IReview[] =[
    {
      name: "Name",
      surname: "Surname",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: './images/test_review.jpg',
    },
    {
      name: "Name",
      surname: "Surname",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: null,
    },
    {
      name: "Name",
      surname: "Surname",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: null,
    },
  ]
}
