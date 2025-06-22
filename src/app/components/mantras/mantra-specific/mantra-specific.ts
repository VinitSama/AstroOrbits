import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ThemeService } from '../../../services/theme.service';
import { SectionTag } from "../../section-tag/section-tag";
import { BlogSection } from "../../blog-section/blog-section";
import { MantraTable } from "../mantra-table/mantra-table";

@Component({
  selector: 'app-mantra-specific',
  imports: [
    CommonModule,
    SectionTag,
    BlogSection,
    MantraTable
],
  templateUrl: './mantra-specific.html',
  styleUrl: './mantra-specific.css'
})
export class MantraSpecific implements OnInit{
  
  @Input() mantraName!: string;

  svgColor!: ISvgColors;

  mantras: string[] = [
    "ओ३म् भूर्भुव: स्व: |<br>तत्सवितुर्वरेण्यं भर्गोदेवस्य धीमहि |<br>धियो यो न: प्रचोदयात् ||",
    "The Gayatri Mantra in Roman<br>Om bhoor bhuvah svah |<br>Tat savitur varenyam bhargo devasya dhimahi |<br>Dhiyo yo nah prachodayat ||",
  ]

  brief = "Goddess Gayatri is the mother of all Vedas and the embodiment of knowledge. A person who is devoted to Gayatri Maa is capable of achieving great success in the path of self development. Goddess Gayatri inspires men to achieve wisdom. Gayatri influences the mind of the person, his intellect, heart and inner self. As soon as the divine light of Gayatri falls on an individual, the evil thoughts and falsehood drifts away from him. He moves toward a healthy, balanced and righteous lifestyle."

  meaning: {
    bullets?: string[];
    brief?: string
  } = {
    brief: "The Gayatri Mantra is a universal prayer. It can be used by anyone, any women, men or children, irrespective of races, castes and creeds. It is the prayer to the Almighty God, who is the creator of this universe, who gives essence to our existence, removes all our pains and sufferings, and grants happiness by showering his divine grace on us. By worshipping him, we achieve brilliance that leads us to righteous path.",
    bullets: [
      "Om- Almighty God, the supreme spirit that protects everyone",
      "Bhoor- the land or the earth that gives us life",
      "Bhuvah- destroyer of sufferings, the one who takes way sufferings from everyone",
      "Svah-embodiment of happiness and contentment",
      "Tat- that refers to the supreme God",
    ]
  }

  importance = "It is believed by Hindus that chanting the Gayatri Mantra for once can banish the sins of the day. Chanting the Gayatri Mantra for 10 times, the sins of the day and the night can be absolved. If the Mantra is chanted for 100 times, sins for the month are forgiven. Chanting the mantra for 100 times can relieve from the sins of several years. Sins for lifetime can be banished by chanting the Mantra for one lakh times. Ten lakh times would remove the sins of past lives. Chanting it for 100 lakh times would remove the sins of all the lives and chanting the Gayatri mantra for thousand lakh times would qualify a Brahmin for salvation.<br><br>It is said that there is no better Mantra to chant other than Gayatri mantra.<br>Religious texts say that chanting the Gayatri mantra with proper meditation and following the proper methods remove all the obstacles and sufferings affecting the mind and the body. It generates zeal and positivity within the individual. It encourages noble thoughts, improves judgment, self confidence, patience, peacefulness and satisfaction. All the negative vibes and influences are eliminated. The Gayatri Mantra promotes knowledge, creativity, insight, prosperity, fame and longevity. It protects one from all kinds of problems and sufferings.";

  kinds: {
    brief?: string;
    types: {
      name: string;
      mantra: string;
      effect?: string
    }[]
  } = {
    brief: "There are many other types of Gayatri Mantra that are formed by the sages and saints in ancient times. These Mantras have their own relevance and importance. Chanting these Mantras give a unique result. These mantras are formed for a specific deity and by chanting them the blessings of that particular deity can be received",
    types: [
      {
        name: "Ganesha Gayatri",
        mantra: "Om Ekadanthaya Vidmahe Vakratundaya Dhimahi Tanno tantihi Prachodayat",
        effect: "The mantra is known to destruct obstacles and give success in difficult tasks.",
      },
      {
        name: "Vishnu Gayatri",
        mantra: "Om Narayanaya Vidmahe Vasudevaya Dhimahi Tanno Vishunha Prachodayat",
        effect: "Chanting this mantra helps in developing sustaining power.",
      },
      {
        name: "Shiva Gayatri Mantra",
        mantra: " Om Panchavaktra Vidmahe Mahadevaya Dhimahi Tanno Rudraha Pracho dayat",
      },
    ]
  }

  mythology = "It is said that Vishvamitra seared the Gayatri mantra. Vishvamitra was a sage in ancient India. He did severe penance to become the ultimate Rishi. Many Lords tried to break his concentration, but failed. At last, Lord Brahma was pleased and gave him the ultimate Mantra of Gayatri and this way the mantra is now known to all of us. However, there are only 24 sages since antiquity who has truly and deeply understood the meaning of this Gayatri Mantra.<br><br>We have got his Gayatri Mantra as a result of severe penance and prayers of Vishvamitra. He has showered his education on the mankind by telling who is Devi Gayatri, how to worship her and how to please her in order to receive her blessings.<br><br>The Gayatri Mantra is a very powerful Mantra and has been found in the Rig, Yajur and Sama Veda. If chanted properly, the Gayatri Mantra can relieve one of all the sufferings and brings one on the right path. It showers righteous attitude, wisdom, immense knowledge, contentment and happiness."

  constructor(private route: ActivatedRoute, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadSvgColors();
    this.route.paramMap.subscribe(params => {
      this.loadFromRouteIfNeeded(params);
    });
  }

  private loadFromRouteIfNeeded(params: ParamMap){

    const mantraParam = params.get('mantra');

    this.mantraName = mantraParam as string;


    
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
  }

  private loadSvgColors() {
    this.svgColor = this.themeService.getSvgColor();
  }

}
