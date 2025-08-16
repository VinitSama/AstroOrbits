import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FeatureCardT1 } from "../feature-card-t1/feature-card-t1";
import { IFeatureCard } from '../../interfaces/ifeature-card';
import { IFeatureCardT2 } from '../../interfaces/ifeature-card-t2';
import { FeatureCardT2 } from "../feature-card-t2/feature-card-t2";
import { DomSanitizer } from '@angular/platform-browser';

type TDoshaOption = "Manglik" | "Kalsarpa" | "Sadhesati" | "Pitra";

@Component({
  selector: 'app-doshas',
  imports: [
    CommonModule,
    FeatureCardT1,
    FeatureCardT2
],
  templateUrl: './doshas.html',
  styleUrl: './doshas.css'
})
export class Doshas implements OnInit{

  @Input() summaryCard!: IFeatureCard

  @Input() doshasCard!: IFeatureCardT2[]

  documentStarSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
  <path d="M2.95768 0.0830078C1.76672 0.0830078 0.791016 1.05871 0.791016 2.24967V21.7497C0.791016 22.9406 1.76672 23.9163 2.95768 23.9163H17.041C18.232 23.9163 19.2077 22.9406 19.2077 21.7497V6.04134H14.8743C13.9835 6.04134 13.2493 5.30722 13.2493 4.41634V0.0830078H2.95768ZM14.3327 0.0830078V4.41634C14.3327 4.7258 14.5649 4.95801 14.8743 4.95801H18.9093C18.9456 4.92558 14.3327 0.0830078 14.3327 0.0830078ZM10.6627 9.4458L11.5852 12.0124L14.3147 12.1023C14.8213 12.12 15.0284 12.761 14.6279 13.0714L12.4707 14.7419L13.2282 17.3624C13.3699 17.8498 12.823 18.2466 12.403 17.9612L10.1464 16.4261L7.88559 17.9559C7.46582 18.2394 6.92097 17.8435 7.06145 17.3571L7.82423 14.7376L5.6692 13.0619C5.26976 12.7501 5.47895 12.1099 5.98552 12.0938L8.71501 12.0092L9.64283 9.44369C9.71814 9.23621 9.91192 9.09515 10.1547 9.09639C10.3975 9.09747 10.5888 9.23922 10.6627 9.4458ZM10.1517 11.2242L9.60793 12.7233C9.53268 12.9319 9.33777 13.0736 9.11599 13.0809L7.52061 13.1296L8.77956 14.1092C8.95469 14.2452 9.02928 14.474 8.96787 14.6869L8.52142 16.2167L9.8428 15.3238C10.0264 15.1993 10.2675 15.1993 10.4511 15.3238L11.7704 16.2209L11.3271 14.6901C11.2654 14.4766 11.3405 14.2472 11.5165 14.1114L12.7775 13.1349L11.1821 13.082C10.9604 13.0746 10.7655 12.933 10.6902 12.7244L10.1517 11.2242Z" fill="#FFB114"/>
  </svg>`;

  constructor(private santizer: DomSanitizer) {}

  ngOnInit(): void {
    this.doshasCard.forEach(c =>{
      c.svg = this.santizer.bypassSecurityTrustHtml(this.documentStarSvg);
    })
  }

}
