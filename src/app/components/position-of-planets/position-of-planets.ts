import { Component, Input, OnInit } from '@angular/core';
import { IPlanetInfo, IPlanetInfoDisplayMap } from '../../interfaces/iplanet-info';
import { CommonModule } from '@angular/common';
import { KundliFeatureCard } from "../kundli/kundli-feature-card/kundli-feature-card";
import { IKundliFeatureCard } from '../../interfaces/ikundli-feature-card';

@Component({
  selector: 'app-position-of-planets',
  imports: [
    CommonModule,
    KundliFeatureCard
],
  templateUrl: './position-of-planets.html',
  styleUrl: './position-of-planets.css'
})
export class PositionOfPlanets implements OnInit {

  
  @Input() positionOfPlanet: IPlanetInfo[] = [
    {
      planet: "Sun",
      rValue: "",
      sign: "Pisces",
      signLord: "Jupitor",
      degree: "4.97",
      nakshatra: "Uttra Bhdrapad",
      nakshatraLord: "Saturn",
      house: "12",
    },
    {
      planet: "Moon",
      rValue: "Moon",
      sign: "Moon",
      signLord: "Moon",
      degree: "Moon",
      nakshatra: "Moon",
      nakshatraLord: "Moon",
      house: "Moon",
    },
    {
      planet: "Mars",
      rValue: "Mars",
      sign: "Mars",
      signLord: "Mars",
      degree: "Mars",
      nakshatra: "Mars",
      nakshatraLord: "Mars",
      house: "Mars",
    },
    {
      planet: "Mercury",
      rValue: "Mercury",
      sign: "Mercury",
      signLord: "Mercury",
      degree: "Mercury",
      nakshatra: "Mercury",
      nakshatraLord: "Mercury",
      house: "Mercury",
    },
    {
      planet: "Jupiter",
      rValue: "Jupiter",
      sign: "Jupiter",
      signLord: "Jupiter",
      degree: "Jupiter",
      nakshatra: "Jupiter",
      nakshatraLord: "Jupiter",
      house: "Jupiter",
    },
    {
      planet: "Venus",
      rValue: "Venus",
      sign: "Venus",
      signLord: "Venus",
      degree: "Venus",
      nakshatra: "Venus",
      nakshatraLord: "Venus",
      house: "Venus",
    },
    {
      planet: "Saturn",
      rValue: "Saturn",
      sign: "Saturn",
      signLord: "Saturn",
      degree: "Saturn",
      nakshatra: "Saturn",
      nakshatraLord: "Saturn",
      house: "Saturn",
    },
    {
      planet: "Rahu",
      rValue: "Rahu",
      sign: "Rahu",
      signLord: "Rahu",
      degree: "Rahu",
      nakshatra: "Rahu",
      nakshatraLord: "Rahu",
      house: "Rahu",
    },
    {
      planet: "Ketu",
      rValue: "Ketu",
      sign: "Ketu",
      signLord: "Ketu",
      degree: "Ketu",
      nakshatra: "Ketu",
      nakshatraLord: "Ketu",
      house: "Ketu",
    },
    {
      planet: "Uranus",
      rValue: "Uranus",
      sign: "Uranus",
      signLord: "Uranus",
      degree: "Uranus",
      nakshatra: "Uranus",
      nakshatraLord: "Uranus",
      house: "Uranus",
    },
    {
      planet: "Neptune",
      rValue: "Neptune",
      sign: "Neptune",
      signLord: "Neptune",
      degree: "Neptune",
      nakshatra: "Neptune",
      nakshatraLord: "Neptune",
      house: "Neptune",
    },
    {
      planet: "Pluto",
      rValue: "Pluto",
      sign: "Pluto",
      signLord: "Pluto",
      degree: "Pluto",
      nakshatra: "Pluto",
      nakshatraLord: "Pluto",
      house: "Pluto",
    },
    {
      planet: "Ascendant",
      rValue: "Ascendant",
      sign: "Ascendant",
      signLord: "Ascendant",
      degree: "Ascendant",
      nakshatra: "Ascendant",
      nakshatraLord: "Ascendant",
      house: "Ascendant",
    },
  ];
  @Input() summaryCard?: IKundliFeatureCard;

  planetOrder = ["Sun", "Moon", "Mars", "Mercury","Jupiter","Venus","Saturn","Rahu","Ketu","Uranus","Neptune","Pluto","Ascendant"];

  svgFile = [
    "/images/planets/1.svg",
    "/images/planets/2.svg",
    "/images/planets/3.svg",
    "/images/planets/4.svg",
    "/images/planets/5.svg",
    "/images/planets/6.svg",
    "/images/planets/7.svg",
    "/images/planets/8.svg",
    "/images/planets/9.svg",
    "/images/planets/10.svg",
    "/images/planets/11.svg",
    "/images/planets/12.svg",
    "/images/planets/13.svg",
  ];

  tableHeaders: IPlanetInfoDisplayMap[] = [
    // { label: "Symbol", key: "planet" },
    { label: "Planet", key: "planet" },
    { label: "R", key: "rValue" },
    { label: "Sign", key: "sign" },
    { label: "Sign Lord", key: "signLord" },
    { label: "Degree", key: "degree" },
    { label: "Nakshatra", key: "nakshatra" },
    { label: "Nakshatra Lord", key: "nakshatraLord" },
    { label: "House", key: "house" }
  ];

  ngOnInit(): void {
    this.sortPlanet();
  }

  private sortPlanet(){
    this.positionOfPlanet.sort((a,b) => {
      return this.planetOrder.indexOf(a.planet) - this.planetOrder.indexOf(b.planet);
    })
  }

}
