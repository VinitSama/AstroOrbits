import { Injectable } from '@angular/core';
import { TPlanetSvg } from '../types/tplanet-svg';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private planetSvgName: TPlanetSvg[] = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu", "uranus", "neptune", "pluto", "ascendant"]

  constructor() { }

  nameSvgMapper(name: TPlanetSvg): string {
    return `./images/planets/${this.planetSvgName.indexOf(name) + 1}.svg`;
  }

}
