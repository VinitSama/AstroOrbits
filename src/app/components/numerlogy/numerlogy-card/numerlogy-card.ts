import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numerlogy-card',
  imports: [
    CommonModule
  ],
  templateUrl: './numerlogy-card.html',
  styleUrl: './numerlogy-card.css'
})
export class NumerlogyCard {
  @Input() num: number = 0;
  @Input() type: 1 | 2 = 1;
}
