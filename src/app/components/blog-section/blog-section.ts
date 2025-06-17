import { Component, Input } from '@angular/core';
import { ISvgColors } from '../../interfaces/isvg-link';
import { IBlogCard } from '../../interfaces/iblog-card';
import { SectionTag } from "../section-tag/section-tag";
import { BlogCard } from "./blog-card/blog-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-section',
  imports: [
    SectionTag, 
    BlogCard,
    CommonModule,
  ],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css'
})
export class BlogSection {

  @Input() svgColor!: ISvgColors;
  @Input() showView: boolean = true;
  title = "Blogs";
  blogCards: IBlogCard[] = [
    {
      imageUrl: '',
      author: 'Aishwary Sinha',
      tag: 'match making',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      brief: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    },
    {
      imageUrl: '',
      author: 'Aishwary Sinha',
      tag: 'daily horoscope',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      brief: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    },
    {
      imageUrl: '',
      author: 'Aishwary Sinha',
      tag: 'panchang',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      brief: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    },
  ]
}
