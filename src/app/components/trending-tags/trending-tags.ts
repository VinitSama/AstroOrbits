import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITrendingContainer } from '../../interfaces/itrending-tag';

@Component({
  selector: 'app-trending-tags',
  imports: [
    CommonModule
  ],
  templateUrl: './trending-tags.html',
  styleUrl: './trending-tags.css'
})
export class TrendingTags {
  @Input() tagInfo!: ITrendingContainer;
}
