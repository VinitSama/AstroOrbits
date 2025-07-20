import { Component, OnInit } from '@angular/core';
import { MenuCard } from "../../menu-card/menu-card";
import { IMenuCard } from '../../../../interfaces/imenu-card';
import { PanchangService } from '../../../../services/panchang.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-panchang-menu-card',
  imports: [MenuCard],
  templateUrl: './panchang-menu-card.html',
  styleUrl: './panchang-menu-card.css'
})
export class PanchangMenuCard implements OnInit {

  card: IMenuCard = {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <g clip-path="url(#clip0_763_60)">
              <path d="M27.2866 15.1326V7.062C27.2866 5.14385 25.7159 3.55956 23.7976 3.55956H23.3631V3.01246C23.3631 1.64389 22.2536 0.534417 20.885 0.534417C19.5164 0.534417 18.407 1.64389 18.407 3.01246V3.55956H9.32082V3.01246C9.32082 1.62489 8.19592 0.5 6.80836 0.5C5.42079 0.5 4.2959 1.62489 4.2959 3.01246V3.55956H3.9204C2.00219 3.55956 0.441162 5.14385 0.441162 7.062V25.5939C0.441162 27.5121 2.00219 29.0972 3.9204 29.0972H14.8371C16.637 31.25 19.2973 32.4959 22.1034 32.5C27.3142 32.5 31.5588 28.2545 31.5588 23.0436C31.559 19.7408 29.8335 16.8228 27.2866 15.1326ZM19.7837 3.01246C19.7731 2.41291 20.2504 1.91827 20.85 1.90767C20.8596 1.90753 20.8693 1.90746 20.8789 1.90753C21.4841 1.90113 21.98 2.38655 21.9864 2.99181C21.9864 2.99869 21.9864 3.00558 21.9864 3.01246V5.69343H19.7837V3.01246ZM5.67259 3.01246C5.67913 2.39563 6.18451 1.90092 6.80133 1.90746C6.80244 1.90746 6.80347 1.90746 6.8045 1.90753C7.4236 1.90753 7.94413 2.39343 7.94413 3.01246V5.69343H5.67259V3.01246ZM1.81785 7.062C1.81785 5.90289 2.7613 4.93625 3.9204 4.93625H4.2959V6.41041C4.2959 6.79051 4.61336 7.07012 4.99353 7.07012H8.61561C8.99571 7.07012 9.32082 6.79051 9.32082 6.41041V4.93625H18.407V6.41041C18.3968 6.76456 18.6756 7.05993 19.0298 7.07012C19.0425 7.07046 19.0551 7.07046 19.0678 7.07012H22.6899C23.0495 7.0821 23.3508 6.80022 23.3628 6.44056C23.3631 6.43051 23.3632 6.42046 23.3631 6.41041V4.93625H23.7976C24.9646 4.94802 25.9055 5.89504 25.9099 7.062V9.27282H1.81785V7.062ZM3.9204 27.7205C2.7613 27.7205 1.81785 26.753 1.81785 25.5939V10.6495H25.9099V14.3841C24.7117 13.858 23.4172 13.5866 22.1086 13.5871C16.8978 13.5871 12.6558 17.8388 12.6558 23.0497C12.6532 24.6868 13.0763 26.2964 13.8837 27.7205H3.9204ZM22.1034 31.1111C17.6444 31.1111 14.0297 27.4964 14.0297 23.0374C14.0297 18.5784 17.6444 14.9637 22.1034 14.9637C26.5624 14.9637 30.1771 18.5784 30.1771 23.0374V23.0375C30.172 27.4943 26.5603 31.106 22.1034 31.1111Z" fill="#240028"/>
              <path d="M25.3462 23.0397H22.3305V18.8979C22.3305 18.5178 22.0224 18.2096 21.6422 18.2096C21.262 18.2096 20.9538 18.5178 20.9538 18.8979V23.7274C20.9599 24.1102 21.2723 24.4171 21.6551 24.4164H25.3462C25.7263 24.4164 26.0345 24.1082 26.0345 23.7281C26.0345 23.3479 25.7263 23.0397 25.3462 23.0397Z" fill="#240028"/>
            </g>
            <defs>
              <clipPath id="clip0_763_60">
                <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
          </svg>`,
    heading: "Today’s Panchang",
    sub: "Know what is the correct date of doing shubh karya",
    blurColor:'#14B9FF',
    width: "100%",
  };
  
  panchang!: any;

  constructor(private panchangService: PanchangService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadPanchang();
    this.svgSantization();
  }

  private svgSantization(){
    const s = this.card.svg as string;
    this.card.svg = this.sanitizer.bypassSecurityTrustHtml(s);
  }

  private loadPanchang(){
    this.panchangService.getPanchang().subscribe({
      next: response => {
        const res = response; 
        this.makePanchangObject(res);
      },
      error: err => {
        console.error('API error:', err);
      }
    });
  }

  private makePanchangObject(response: any){
    console.log(response)
    const res = response?.response;
    if (!res){
      return;
    }
    this.panchang = {
      tithi: `${res['tithi']['type']} ${res["tithi"]["name"]} upto ${this.timeFromString(res['tithi']['end'])}`,
      month: res["advanced_details"]["masa"]["amanta_name"],
      day: this.dayMapper(res['day']['name']),
      nakshatra: `${res["nakshatra"]["name"]} upto ${this.timeFromString(res["nakshatra"]["end"])}`,
      samvat: res["advanced_details"]["years"]["vikram_samvaat"],
    }
    console.log(this.panchang)

  }

  private timeFromString(d: string){
    const date = new Date(d);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  private dayMapper(englishDay: string): string {
    const dayMap: { [key: string]: string } = {
      Sunday: "Ravivaar",
      Monday: "Somvaar",
      Tuesday: "Mangalvaar",
      Wednesday: "Budhvaar",
      Thursday: "Guruvaar",
      Friday: "Shukravaar",
      Saturday: "Shanivaar"
    };

    return dayMap[englishDay]
  }
}
