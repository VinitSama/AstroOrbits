import { Component, Input } from '@angular/core';
import { IMetricCard } from '../../../interfaces/imetric-card';

@Component({
  selector: 'app-metric-card',
  imports: [],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.css'
})
export class MetricCard {
  
  @Input() card!: IMetricCard;

}
