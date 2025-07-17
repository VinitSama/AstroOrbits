import { Component } from '@angular/core';
import { SectionTag } from "../section-tag/section-tag";
import { CommonModule } from '@angular/common';
import { RudrakshCard } from "./rudraksh-card/rudraksh-card";
import { IRudrakshCard } from '../../interfaces/irudraksh-card';

@Component({
  selector: 'app-rudraksh-section',
  imports: [
    SectionTag,
    CommonModule,
    RudrakshCard
],
  templateUrl: './rudraksh-section.html',
  styleUrl: './rudraksh-section.css'
})
export class RudrakshSection {
  card: IRudrakshCard[] = [
    {
      name: "Ek Mukhi Rudraksh",
      brief: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      price: 2999,
      discount: 20,
      discountedPrice: 999,
      imageURL: "./images/rudraksh.png",
    },
    {
      name: "Ek Mukhi Rudraksh",
      brief: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      price: 2999,
      discount: 20,
      discountedPrice: 999,
      imageURL: "./images/rudraksh.png",
    },
    {
      name: "Ek Mukhi Rudraksh",
      brief: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      price: 2999,
      discount: 20,
      discountedPrice: 999,
      imageURL: "./images/rudraksh.png",
    },
    {
      name: "Ek Mukhi Rudraksh",
      brief: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      price: 2999,
      discount: 20,
      discountedPrice: 999,
      imageURL: "./images/rudraksh.png",
    },
  ]
}
