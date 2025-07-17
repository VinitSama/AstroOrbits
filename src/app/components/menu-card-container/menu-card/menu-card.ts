import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-card',
  imports: [
    CommonModule
  ],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.css'
})
export class MenuCard {
  @Input() svg: SafeHtml =  '';
  @Input() heading: string = 'Test';
  @Input() sub: string = 'testsub';
  @Input() width: string = "380px";
  @Input() blurColor: string = "";
}
