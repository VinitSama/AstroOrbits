import { Component, Input } from '@angular/core';
import { IRudrakshCard } from '../../../interfaces/irudraksh-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rudraksh-card',
  imports: [
    CommonModule
  ],
  templateUrl: './rudraksh-card.html',
  styleUrl: './rudraksh-card.css'
})
export class RudrakshCard{
  @Input() card!: IRudrakshCard;
}
