import { Component, Input } from '@angular/core';
import { IDetailTable } from '../../../../interfaces/idetail-table';
import { IKundliDetail } from '../../../../interfaces/ikundli-detail';
import { DetailsTable } from "../../../details-table/details-table";
import { CommonModule } from '@angular/common';
import { SectionTag } from "../../../section-tag/section-tag";
import { IArticle } from '../../../../interfaces/iarticle';
import { ISvgColors } from '../../../../interfaces/isvg-link';
import { Article } from "../../../article/article";

@Component({
  selector: 'app-matching-basic-details',
  imports: [
    DetailsTable,
    CommonModule,
    SectionTag,
    Article
],
  templateUrl: './matching-basic-details.html',
  styleUrl: './matching-basic-details.css'
})
export class MatchingBasicDetails {

  @Input() svgColor!: ISvgColors;
  articleSectionHeading = "What Is a Janam Kundli or Birth Chart?";

  article: IArticle = {
    title: "",
    content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope"
  }

  tables: IDetailTable[] = [
    {
      title: "Boy's Details",
      kundliDetail: [
        {
          name: "Name",
          value: "ABC",
        },
        {
          name: "Nakshatra",
          value: "ABC",
        },
        {
          name: "Birth Date & Time",
          value: "19/03/1996 | 7:55 AM",
        },
        {
          name: "Ascendant",
          value: "Aries",
        },
        {
          name: "Birth Place",
          value: "Noida",
        },
        {
          name: "Sign",
          value: "Pisces",
        },
        {
          name: "Gender",
          value: "Male",
        },
      ]
    },
    {
      title: "Girls Details",
      kundliDetail: [
        {
          name: "Name",
          value: "ABC",
        },
        {
          name: "Nakshatra",
          value: "ABC",
        },
        {
          name: "Birth Date & Time",
          value: "19/03/1996 | 7:55 AM",
        },
        {
          name: "Ascendant",
          value: "Aries",
        },
        {
          name: "Birth Place",
          value: "Noida",
        },
        {
          name: "Sign",
          value: "Pisces",
        },
        {
          name: "Gender",
          value: "Male",
        },
      ]
    },
  ]

  private parseJsonToIKundliDetail(obj: Record<string, string>): IKundliDetail[] {
    return Object.entries(obj).map(([key, value]) => {
      const isDate = !isNaN(Date.parse(value));
      return {
        name: key,
        value: isDate ? new Date(value).toISOString() : value
      };
    });
  }

}
