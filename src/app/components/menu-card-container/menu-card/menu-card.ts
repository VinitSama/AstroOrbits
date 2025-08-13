import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IMenuCard } from '../../../interfaces/imenu-card';

@Component({
  selector: 'app-menu-card',
  imports: [
    CommonModule
  ],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.css'
})
export class MenuCard implements OnInit{
  @Input() card!: IMenuCard;

  ngOnInit(): void {
    if (!this.card.width){
      this.card.width = "380px";
    }
  }
}
