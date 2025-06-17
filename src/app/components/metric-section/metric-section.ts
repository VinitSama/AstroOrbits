import { Component } from '@angular/core';
import { IMetricCard } from '../../interfaces/imetric-card';
import { CommonModule } from '@angular/common';
import { MetricCard } from './metric-card/metric-card';

@Component({
  selector: 'app-metric-section',
  imports: [
    CommonModule,
    MetricCard,
  ],
  templateUrl: './metric-section.html',
  styleUrl: './metric-section.css'
})
export class MetricSection {

  metricCards: IMetricCard[] = [
    {
      value: '99%',
      title: 'Data Accuracy',
      brief: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      value: '10+',
      title: 'Astrologers',
      brief: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      value: '13K',
      title: 'Happy Clients',
      brief: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      value: '12+',
      title: 'Services',
      brief: 'Lorem ipsum dolor sit amet, consectetur.',
    },
  ]

}
