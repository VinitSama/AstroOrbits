import { Component, Input } from '@angular/core';
import { IArticle } from '../../../interfaces/iarticle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [
    CommonModule,
  ],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {

  @Input() article!: IArticle;

}
