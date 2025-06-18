import { Component, Input } from '@angular/core';
import { IHoroscopeReport } from '../../../../interfaces/ihoroscope-report';

@Component({
  selector: 'app-horoscope-report',
  imports: [],
  templateUrl: './horoscope-report.html',
  styleUrl: './horoscope-report.css'
})
export class HoroscopeReport {

  @Input() horoscopeReport!: IHoroscopeReport;
  
}
