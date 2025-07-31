import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTag } from "../section-tag/section-tag";
import { IPersonalisedContainer } from '../../interfaces/ipersonalised-container';

@Component({
  selector: 'app-personalize-section',
  imports: [
    CommonModule,
    SectionTag
],
  templateUrl: './personalize-section.html',
  styleUrl: './personalize-section.css'
})
export class PersonalizeSection {
  @Input() personalisedInfo!: IPersonalisedContainer;
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
