import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IDosha } from '../../interfaces/idosha';
import { ISvgColors } from '../../interfaces/isvg-link';

type TDoshaOption = "Manglik" | "Kalsarpa" | "Sadhesati" | "Pitra";

@Component({
  selector: 'app-doshas',
  imports: [
    CommonModule
  ],
  templateUrl: './doshas.html',
  styleUrl: './doshas.css'
})
export class Doshas {

  @Input() svgColor!: ISvgColors;


  selectedOption: TDoshaOption = "Manglik";

  chooseOption(option: TDoshaOption ) {
    this.selectedOption = option;
  }

  options: {
    name: TDoshaOption ;
  }[] = [
    {
      name: "Manglik",
    },
    {
      name: "Kalsarpa",
    },
    {
      name: "Sadhesati",
    },
    {
      name: "Pitra",
    },
  ]

  doshas: IDosha[] = [
    {
      name: "Manglik Dosha",
      showResult: false,
      brief: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      result: {
        openResult: true,
        solution: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      },
    },
    {
      name: "Kalsarpa Dosha",
      showResult: true,
      brief: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      result: {
        openResult: true,
        solution: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      },
    },
    {
      name: "Sadhesati",
      showResult: true,
      brief: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      result: {
        openResult: false,
        solution: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      },
    },
    {
      name: "Pitra Dosha (Dosha is present)",
      showResult: true,
      brief: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      result: {
        openResult: false,
        solution: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
      },
    },
  ]

  showResult(id: number):void {
    if (this.doshas[id]?.result) {
      this.doshas[id].result.openResult = true;
    }
  }

  svgFile = [
    "/images/lagna.svg",
    "/images/palm.svg",
    "/images/palm.svg",
    "/images/palm.svg",
  ];

  smoothScrolling(idx: number):void {
    const element = document.getElementById('dosha-' + idx);

    if( element ){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
}
