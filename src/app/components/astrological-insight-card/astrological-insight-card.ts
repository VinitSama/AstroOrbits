import { Component, inject, Input, OnInit } from '@angular/core';
import { IInsightCard } from '../../interfaces/iinsight-card';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-astrological-insight-card',
  imports: [],
  templateUrl: './astrological-insight-card.html',
  styleUrl: './astrological-insight-card.css'
})
export class AstrologicalInsightCard implements OnInit {
  @Input() card!: IInsightCard;

  private planetService = inject(PlanetService);

  ngOnInit(): void {
    this.card.svg = this.planetService.nameSvgMapper(this.card.svgName);
  }
}
