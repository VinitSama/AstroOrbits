import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TarotCard } from "../tarot-card/tarot-card";

@Component({
  selector: 'app-tarot-popup',
  imports: [
    CommonModule,
    TarotCard
],
  templateUrl: './tarot-popup.html',
  styleUrl: './tarot-popup.css'
})
export class TarotPopup {
  @Input() option!: number;
  @Output() closed = new EventEmitter<void>();

  
  oneCard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  threeCard = [1,2,3];

  close() {
    this.closed.emit();
  }
}
