import { Component } from '@angular/core';
import { TPlanetSvg } from '../../../../types/tplanet-svg';
import { CommonModule } from '@angular/common';

export interface IGuna {
  Varna: TPlanetSvg | number;
  Vashya: TPlanetSvg | number;
  TaraDina: TPlanetSvg | number;
  Yoni: TPlanetSvg | number;
  GrahaMaitriMaitri: TPlanetSvg | number;
  Gana: TPlanetSvg | number;
  Bhakoot: TPlanetSvg | number;
  Nadi: TPlanetSvg | number;
}


@Component({
  selector: 'app-matching-gunas',
  imports: [
    CommonModule
  ],
  templateUrl: './matching-gunas.html',
  styleUrl: './matching-gunas.css'
})

export class MatchingGunas {

  summaryInfo: {
    guna: number;
    summary: string
  } = {
    guna: 24.5,
    summary: "Here lies the summary of the planetary output Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  gunas = ['Varna', 'Vashya', 'Tara/Dina', 'Yoni', 'Graha Maitri/Maitri', 'Gana', 'Bhakoot', 'Nadi'];

  gunaName: (keyof IGuna)[] = [
    'Varna',
    'Vashya',
    'TaraDina',
    'Yoni',
    'GrahaMaitriMaitri',
    'Gana',
    'Bhakoot',
    'Nadi'
  ];

  table: {
    title: string;
    col: IGuna;
  }[] = [
    {
      title: "Boy’s",
      col: {
        Varna: 'jupiter',
        Vashya: 'moon',
        TaraDina: 'mars',
        Yoni: 'mercury',
        GrahaMaitriMaitri: 'jupiter',
        Gana: 'venus',
        Bhakoot: 'saturn',
        Nadi: 'rahu',
      },
    },
    {
      title: "Girl’s",
      col: {
        Varna: 'jupiter',
        Vashya: 'moon',
        TaraDina: 'mars',
        Yoni: 'mercury',
        GrahaMaitriMaitri: 'jupiter',
        Gana: 'venus',
        Bhakoot: 'saturn',
        Nadi: 'rahu',
      },
    },
    {
      title: "Maximum",
      col: {
        Varna: 1,
        Vashya: 1,
        TaraDina: 1,
        Yoni: 1,
        GrahaMaitriMaitri: 1,
        Gana: 1,
        Bhakoot: 1,
        Nadi: 1,
      },
    },
    {
      title: "Obtained",
      col: {
        Varna: 1,
        Vashya: 1,
        TaraDina: 1,
        Yoni: 1,
        GrahaMaitriMaitri: 1,
        Gana: 1,
        Bhakoot: 1,
        Nadi: 1,
      },
    },
  ];
}
