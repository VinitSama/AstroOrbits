import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FeatureCardT2 } from "../../../feature-card-t2/feature-card-t2";
import { TZodiacSign } from '../../../../types/tzodiac-sign';
import { IFeatureCardT2 } from '../../../../interfaces/ifeature-card-t2';

@Component({
  selector: 'app-mathing-characteristic-analysis',
  imports: [
    CommonModule,
    FeatureCardT2
],
  templateUrl: './mathing-characteristic-analysis.html',
  styleUrl: './mathing-characteristic-analysis.css'
})
export class MathingCharacteristicAnalysis implements OnInit {

  @Input() charachteristics!: {
    boy: {
      zodiac: TZodiacSign;
      brief: string;
    };
    girl: {
      zodiac: TZodiacSign;
      brief: string;
    };
  };

  summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

  svg = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M5.95768 1.08301C4.76672 1.08301 3.79102 2.05871 3.79102 3.24967V22.7497C3.79102 23.9406 4.76672 24.9163 5.95768 24.9163H20.041C21.232 24.9163 22.2077 23.9406 22.2077 22.7497V7.04134H17.8743C16.9835 7.04134 16.2493 6.30722 16.2493 5.41634V1.08301H5.95768ZM17.3327 1.08301V5.41634C17.3327 5.7258 17.5649 5.95801 17.8743 5.95801H21.9093C21.9456 5.92558 17.3327 1.08301 17.3327 1.08301ZM13.6627 10.4458L14.5852 13.0124L17.3147 13.1023C17.8213 13.12 18.0284 13.761 17.6279 14.0714L15.4707 15.7419L16.2282 18.3624C16.3699 18.8498 15.823 19.2466 15.403 18.9612L13.1464 17.4261L10.8856 18.9559C10.4658 19.2394 9.92097 18.8435 10.0614 18.3571L10.8242 15.7376L8.6692 14.0619C8.26976 13.7501 8.47895 13.1099 8.98552 13.0938L11.715 13.0092L12.6428 10.4437C12.7181 10.2362 12.9119 10.0952 13.1547 10.0964C13.3975 10.0975 13.5888 10.2392 13.6627 10.4458ZM13.1517 12.2242L12.6079 13.7233C12.5327 13.9319 12.3378 14.0736 12.116 14.0809L10.5206 14.1296L11.7796 15.1092C11.9547 15.2452 12.0293 15.474 11.9679 15.6869L11.5214 17.2167L12.8428 16.3238C13.0264 16.1993 13.2675 16.1993 13.4511 16.3238L14.7704 17.2209L14.3271 15.6901C14.2654 15.4766 14.3405 15.2472 14.5165 15.1114L15.7775 14.1349L14.1821 14.082C13.9604 14.0746 13.7655 13.933 13.6902 13.7244L13.1517 12.2242Z" fill="#FFB114"/>
        </svg>`;

  charchterCards: IFeatureCardT2[] = [];

  ngOnInit(): void {
    this.setCards();
  }

  private setCards() {
    const boy = this.charachteristics?.boy ?? { zodiac: 'Aries', brief: this.summary };
    const girl = this.charachteristics?.girl ?? { zodiac: 'Aries', brief: this.summary };

    this.charchterCards.push({
      title: `Boy: ${boy.zodiac}`,
      brief: boy.brief || this.summary,
      svg: this.svg,
      svgBg: "#FFF1D6"
    });

    this.charchterCards.push({
      title: `Girl: ${girl.zodiac}`,
      brief: girl.brief || this.summary,
      svg: this.svg,
      svgBg: "#FFF1D6"
    });
  }

}
