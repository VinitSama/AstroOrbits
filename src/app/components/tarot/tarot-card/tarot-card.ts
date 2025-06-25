import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarot-card',
  imports: [
    CommonModule
  ],
  templateUrl: './tarot-card.html',
  styleUrl: './tarot-card.css'
})
export class TarotCard {
  @Input() bg: string = "";
}
