import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TRemedisOption = "Sadhesati" | "Gemstone" | "Rudraksha";

@Component({
  selector: 'app-remedies',
  imports: [
    CommonModule
  ],
  templateUrl: './remedies.html',
  styleUrl: './remedies.css'
})
export class Remedies {

  selectedOption: TRemedisOption = "Sadhesati";
  selectedIndex: number = 0;

  chooseOption(idx: number) {
    this.selectedOption = this.options[idx].name;
    this.selectedIndex = idx;
  }

  options: {
    name: TRemedisOption ;
  }[] = [
    {
      name: "Sadhesati",
    },
    {
      name: "Gemstone",
    },
    {
      name: "Rudraksha",
    },
  ]

  svgFile = [
    "/images/lagna.svg",
    "/images/palm.svg",
    "/images/palm.svg",
  ];

  remedies:{
    name: string;
    remedie: string;
  }[] = [
    {
      name: "Sadhesati Remedies",
      remedie: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit."
    },
    {
      name: "Gemstone Remedies",
      remedie: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit."
    },
    {
      name: "Rudraksha Remedies",
      remedie: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit."
    },
  ]

}
