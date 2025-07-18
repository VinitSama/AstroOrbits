import { Component, Input } from '@angular/core';
import { IFAQCard } from '../../../interfaces/ifaq-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-card',
  imports: [
    CommonModule
  ],
  templateUrl: './faq-card.html',
  styleUrl: './faq-card.css'
})
export class FAQCard{
  @Input() card!: IFAQCard;

  isOpen: boolean = false;

  openCard(){
    if(!this.isOpen){
      this.isOpen = true;
    }
  }

  closeCard(event: MouseEvent){
    event.stopPropagation();
    this.isOpen = false;
  }
}
