import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kundli-prediction',
  imports: [
    CommonModule,
  ],
  templateUrl: './kundli-prediction.html',
  styleUrl: './kundli-prediction.css'
})
export class KundliPrediction {

  predictions: {
    area: string;
    value: string;
  }[] = [
    {
      area: "Health",
      value: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
    },
    {
      area: "Emotion",
      value: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
    },
    {
      area: "Luck",
      value: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
    },
    {
      area: "Profession",
      value: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
    },
    {
      area: "Personal",
      value: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
    },
    {
      area: "Travel",
      value: "You will breathe a sigh of relief today that you are feeling better than recent days. Health will improve. Practice yoga and meditation to improve your energy level. A pleasant morning walk will also keep you fit.",
    },
  ]

}
