import { Component } from '@angular/core';
import { IMantraDetails } from '../../../interfaces/imantra-details';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantra-table',
  imports: [
    CommonModule
  ],
  templateUrl: './mantra-table.html',
  styleUrl: './mantra-table.css'
})
export class MantraTable {

  heading = 'Mantra Library';
  mantraDetail: IMantraDetails[] = [
    {
      name: "Gayatri Mantra",
    },
    {
      name: "Om Mantra",
    },
    {
      name: "माँ बगलामुखी के विशेष मंत्र",
    },
    {
      name: "गायत्री मंत्र",
    },
    {
      name: "Maha Mrityunjaya Mantra",
    },
    {
      name: "लक्ष्मी मंत्र",
    },
    {
      name: "कुबेर मंत्र",
    },
    {
      name: "Hanuman Mantras",
    },
    {
      name: "दत्तात्रेय मंत्र",
    },
    {
      name: "शिव मंत्र",
    },
    {
      name: "गणेश मंत्र",
    },
    {
      name: "Mangalam Bhagwan Vishnu Mantra",
    },
    {
      name: "जानें शिव तांडव स्तोत्रम्",
    },
    {
      name: "नवग्रह मंत्र",
    },
    {
      name: "काल भैरव मंत्र का महत्व",
    },
    {
      name: "विष्णु मंत्र",
    },
    {
      name: "माँ महाकाली का संपूर्ण मंत्र",
    },
    {
      name: "रुद्राभिषेक मंत्र",
    },
    {
      name: "रूद्र मंत्र",
    },
  ];
  columns = 3;

  constructor(private router: Router) {}

  get groupedDetails(): IMantraDetails[][] {
    const grouped: IMantraDetails[][] = [];
    for (let i = 0; i < this.mantraDetail.length; i += this.columns) {
      grouped.push(this.mantraDetail.slice(i, i + this.columns));
    }
    return grouped;
  }

  goToMantra(mantra: string) {
    this.router.navigate(['home/mantras', mantra])
    this.smoothScrolling();
  }

  private smoothScrolling():void {
    const element = document.getElementById('header-logo');

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

}
