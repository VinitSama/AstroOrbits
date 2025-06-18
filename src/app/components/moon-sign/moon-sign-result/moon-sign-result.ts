import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ZodiacServices } from '../../../services/zodiac.services';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-moon-sign-result',
  imports: [],
  templateUrl: './moon-sign-result.html',
  styleUrl: './moon-sign-result.css'
})
export class MoonSignResult implements OnInit {

  @Input() svgColor!: ISvgColors;
  @Input() moonSign!: string;
  @Input() report!: string;

  safeSvg: SafeHtml = "Error!";

  @Output() newForm = new EventEmitter<null>();
  @Output() checkHoroscope = new EventEmitter<string>();

  constructor(private zodiacService: ZodiacServices, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadSvg();
  }

  private loadSvg() {
    const svg = this.zodiacService.getSvg(this.moonSign);
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  forForm(){
    this.newForm.emit();
  }

  forHoroscope(){
    this.checkHoroscope.emit(this.moonSign);
  }

}
