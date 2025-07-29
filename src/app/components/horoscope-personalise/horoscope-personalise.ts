import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonalisedHoroscope } from '../../interfaces/ipersonalised-horoscope';
import { CommonModule } from '@angular/common';
import { SectionTag } from "../section-tag/section-tag";

@Component({
  selector: 'app-horoscope-personalise',
  imports: [
    CommonModule, 
    SectionTag
  ],
  templateUrl: './horoscope-personalise.html',
  styleUrl: './horoscope-personalise.css'
})
export class HoroscopePersonalise {
  @Input() horoscope!: IPersonalisedHoroscope[];
  @Output() horoscopeIndexEmitter = new EventEmitter<number>();

  onClick(index: number): void {
    this.horoscopeIndexEmitter.emit(index);
    this.smoothScrolling();
  }

  private smoothScrolling():void {
    const element = document.getElementById('header-logo');

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
}
