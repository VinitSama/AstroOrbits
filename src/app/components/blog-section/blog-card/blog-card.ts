import { Component, Input, OnInit } from '@angular/core';
import { IBlogCard } from '../../../interfaces/iblog-card';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  imports: [
    CommonModule
  ],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css'
})
export class BlogCard implements OnInit{

  @Input() card!: IBlogCard;
  @Input() svgColor!: ISvgColors;

  safeImageUrl: string = '';

  ngOnInit(): void {
    if (!this.card.imageUrl){
      this.card.imageUrl = '/images/sample-text.jpg';
    }
    this.safeImageUrl = 'url(' + this.card.imageUrl + ')';
  }

}
