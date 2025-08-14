import { Component } from '@angular/core';
import { FeatureCardT1 } from "../../../feature-card-t1/feature-card-t1";
import { IFeatureCard } from '../../../../interfaces/ifeature-card';
import { CommonModule } from '@angular/common';

export interface ICompability {
  spritual: string | number;
  mutual: string | number;
  health: string | number;
  physical: string | number;
  mental: string | number;
  temprament: string | number;
  family: string | number;
  progeny: string | number;
}

@Component({
  selector: 'app-matching-compatibility',
  imports: [
    FeatureCardT1,
    CommonModule
  ],
  templateUrl: './matching-compatibility.html',
  styleUrl: './matching-compatibility.css'
})
export class MatchingCompatibility {

  compabilityReport: IFeatureCard = {
    title: "Compatibility Report",
    brief: "Here lies the summary of the planetary output Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  table: {
    title: string;
    col: ICompability;
  }[] = [
    {
      title: "Guna",
      col: {
        spritual: "Spiritual compatibility",
        mutual: "Mutual attraction & dominance",
        health: "Health & wellbeing",
        physical: "Physical & sexual compatibility",
        mental: "Mental compatibility",
        temprament: "Temperament matching",
        family: "Family welfare & prosperity",
        progeny: "Health of future progeny",
      },
    },
    {
      title: "Report",
      col: {
        spritual: "Compatibility",
        mutual: "Compatibility",
        health: "Compatibility",
        physical: "Compatibility",
        mental: "Compatibility",
        temprament: "Compatibility",
        family: "Compatibility",
        progeny: "Compatibility",
      },
    },
    {
      title: "Report",
      col: {
        spritual: 99.1,
        mutual: 99.1,
        health: 99.1,
        physical: 99.1,
        mental: 99.1,
        temprament: 99.1,
        family: 99.1,
        progeny: 99.1,
      },
    },
  ]

  rowName: (keyof ICompability)[] = ['spritual', 'mutual', 'health', 'physical', 'mental', 'temprament', 'family', 'progeny'];

}
