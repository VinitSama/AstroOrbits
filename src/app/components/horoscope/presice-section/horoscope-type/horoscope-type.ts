import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IHoroscopeType } from '../../../../interfaces/ihoroscope-type';
import { SectionTag } from "../../../section-tag/section-tag";
import { Article } from "../../../article/article";
import { ISvgColors } from '../../../../interfaces/isvg-link';
import { IArticle } from '../../../../interfaces/iarticle';

@Component({
  selector: 'app-horoscope-type',
  imports: [
    CommonModule,
    SectionTag,
    Article
],
  templateUrl: './horoscope-type.html',
  styleUrl: './horoscope-type.css'
})
export class HoroscopeType implements OnInit {

  @Input() svgColor!: ISvgColors;

  selectedArticle: IArticle = {
    content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope",
    title: '',
  };
  selectedTypeTitle: string = "Career Horoscope";

  options: IHoroscopeType[] = [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="49" viewBox="0 0 50 49" fill="none">
  <path d="M39.2917 12.7604H34.6979V10.2083C34.6979 7.11113 32.1805 4.59375 29.0833 4.59375H20.9167C17.8195 4.59375 15.3021 7.11113 15.3021 10.2083V12.7604H10.7083C7.61113 12.7604 5.09375 15.2778 5.09375 18.375V20.827C6.80058 24.4898 10.4919 27.0521 14.7917 27.0521H19.3854V24.5C19.3854 22.5298 20.9881 20.9271 22.9583 20.9271H27.0417C29.0119 20.9271 30.6146 22.5298 30.6146 24.5V27.0521H35.2083C39.5081 27.0521 43.1994 24.4918 44.9062 20.827V18.375C44.9062 15.2778 42.3889 12.7604 39.2917 12.7604ZM18.3646 10.2083C18.3646 8.80163 19.51 7.65625 20.9167 7.65625H29.0833C30.49 7.65625 31.6354 8.80163 31.6354 10.2083V12.7604H18.3646V10.2083ZM22.9583 31.1354C22.6766 31.1354 22.4479 30.9068 22.4479 30.625V24.5C22.4479 24.2183 22.6766 23.9896 22.9583 23.9896H27.0417C27.3234 23.9896 27.5521 24.2183 27.5521 24.5V30.625C27.5521 30.9068 27.3234 31.1354 27.0417 31.1354H22.9583ZM35.2083 30.1146C38.9875 30.1146 42.4134 28.5833 44.9062 26.1129V38.7917C44.9062 41.8889 42.3889 44.4062 39.2917 44.4062H10.7083C7.61113 44.4062 5.09375 41.8889 5.09375 38.7917V26.1129C7.58663 28.5854 11.0125 30.1146 14.7917 30.1146H19.3854V30.625C19.3854 32.5952 20.9881 34.1979 22.9583 34.1979H27.0417C29.0119 34.1979 30.6146 32.5952 30.6146 30.625V30.1146H35.2083Z" fill="#3B3B3B"/>
            </svg>`,
      title: 'Career Horoscope',
      content_heading: 'Career Horoscope',
      content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="49" viewBox="0 0 50 49" fill="none">
  <path d="M35.3369 17.5073C38.0891 15.631 38.7812 13.3137 38.7812 11.5211C38.7812 9.41208 37.6951 7.71954 35.878 6.99271C35.0572 6.664 33.6036 6.32304 32.1907 7.11521C30.7554 6.33121 29.3344 6.66604 28.5259 6.99271C26.7068 7.71954 25.6206 9.41412 25.6206 11.5211C25.6206 13.1851 26.2005 15.3064 28.4851 17.103C27.256 17.3419 26.0902 17.7543 25.002 18.2974C23.9404 17.7666 22.8072 17.3603 21.6108 17.1173C23.9097 15.3186 24.4916 13.1892 24.4916 11.5211C24.4916 9.41208 23.4054 7.71954 21.5884 6.99271C20.7656 6.664 19.3119 6.32304 17.9011 7.11521C16.4679 6.33121 15.0448 6.66604 14.2363 6.99271C12.4172 7.71954 11.331 9.41412 11.331 11.5211C11.331 13.3035 12.017 15.6106 14.7386 17.4807C9.15664 19.2427 5.09985 24.4673 5.09985 30.623C5.09985 38.222 11.282 44.4042 18.8811 44.4042C21.082 44.4042 23.1584 43.8713 25.0061 42.9505C26.8538 43.8734 28.9302 44.4042 31.1311 44.4042C38.7302 44.4042 44.9124 38.222 44.9124 30.623C44.9124 24.4918 40.8862 19.2897 35.3431 17.5052L35.3369 17.5073ZM18.875 41.3438C12.9644 41.3438 8.15623 36.5356 8.15623 30.625C8.15623 24.7144 12.9644 19.9062 18.875 19.9062C19.9387 19.9062 20.9473 20.1104 21.9171 20.4003C19.1159 22.9238 17.3437 26.5662 17.3437 30.625C17.3437 34.6838 19.1179 38.3262 21.9171 40.8497C20.9452 41.1396 19.9387 41.3438 18.875 41.3438ZM29.5937 30.625C29.5937 34.2551 27.7705 37.4585 25 39.398C22.2294 37.4585 20.4062 34.2551 20.4062 30.625C20.4062 26.9949 22.2294 23.7915 25 21.852C27.7705 23.7915 29.5937 26.9949 29.5937 30.625ZM31.125 41.3438C30.0613 41.3438 29.0527 41.1396 28.0829 40.8497C30.8841 38.3262 32.6562 34.6838 32.6562 30.625C32.6562 26.5662 30.882 22.9238 28.0829 20.4003C29.0547 20.1104 30.0613 19.9062 31.125 19.9062C37.0356 19.9062 41.8437 24.7144 41.8437 30.625C41.8437 36.5356 37.0356 41.3438 31.125 41.3438Z" fill="#3B3B3B"/>
            </svg>`,
      title: 'Love Horoscope',
      content_heading: 'Love Horoscope',
      content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="49" viewBox="0 0 50 49" fill="none">
  <path d="M15.9819 9.03233C15.7124 7.95842 15.9513 6.83958 16.6332 5.96779C17.3131 5.09396 18.34 4.59375 19.4486 4.59375H30.5512C31.6598 4.59375 32.6868 5.09396 33.3667 5.96779C34.0486 6.83958 34.2875 7.95842 34.018 9.03233L33.0849 12.7604H16.9129L15.9798 9.03233H15.9819ZM38.0646 37.5136C35.586 41.7643 30.9881 44.4062 26.0657 44.4062H23.9321C19.0097 44.4062 14.4118 41.7643 11.9333 37.5136C9.45876 33.2751 9.41793 27.9831 11.823 23.7017L16.2555 15.8229H33.7403L38.1728 23.6997C40.5799 27.9831 40.5391 33.273 38.0646 37.5136ZM21.9374 26.5417C21.9374 25.9802 22.3968 25.5208 22.9583 25.5208H29.0833C29.6468 25.5208 30.1041 25.0635 30.1041 24.5C30.1041 23.9365 29.6468 23.4792 29.0833 23.4792H26.0208V21.4375C26.0208 20.874 25.5634 20.4167 24.9999 20.4167C24.4364 20.4167 23.9791 20.874 23.9791 21.4375V23.4792H22.9583C21.2698 23.4792 19.8958 24.8532 19.8958 26.5417C19.8958 28.2301 21.2698 29.6042 22.9583 29.6042H27.0416C27.6031 29.6042 28.0624 30.0635 28.0624 30.625C28.0624 31.1865 27.6031 31.6458 27.0416 31.6458H20.9166C20.3531 31.6458 19.8958 32.1032 19.8958 32.6667C19.8958 33.2302 20.3531 33.6875 20.9166 33.6875H23.9791V35.7292C23.9791 36.2927 24.4364 36.75 24.9999 36.75C25.5634 36.75 26.0208 36.2927 26.0208 35.7292V33.6875H27.0416C28.7301 33.6875 30.1041 32.3135 30.1041 30.625C30.1041 28.9365 28.7301 27.5625 27.0416 27.5625H22.9583C22.3968 27.5625 21.9374 27.1031 21.9374 26.5417Z" fill="#3B3B3B"/>
  <rect x="16.8333" y="20.4166" width="16.3333" height="18.375" fill="#3B3B3B"/>
  <path d="M27.9273 25.9476C28.5137 25.9476 28.9485 26.4918 28.8189 27.0637C28.7246 27.4802 28.3544 27.7759 27.9273 27.7759H22.0647C21.4772 27.7759 21.0422 27.2296 21.1738 26.657C21.2691 26.2418 21.6387 25.9476 22.0647 25.9476H27.9273ZM26.016 36.75C25.4929 36.75 25.0029 36.4939 24.7043 36.0642L21.3069 31.1754C21.1706 30.9793 21.0971 30.7464 21.0962 30.5076C21.0937 29.8552 21.6219 29.3251 22.2742 29.3251H23.1101C23.5923 29.3251 23.9948 29.2297 24.3176 29.039C24.6442 28.8436 24.8912 28.5714 25.0584 28.2225C25.2295 27.8689 25.3151 27.4549 25.3151 26.9803C25.3151 26.2686 25.1401 25.6963 24.7901 25.2637C24.4401 24.831 23.8801 24.6147 23.1101 24.6147H22.2461C21.5611 24.6147 21.0498 23.9842 21.1912 23.3139C21.2964 22.8153 21.7365 22.4584 22.2461 22.4584H23.1101C24.0901 22.4584 24.9009 22.6398 25.5426 23.0027C26.1881 23.3609 26.6704 23.868 26.9892 24.524C27.312 25.1799 27.4734 25.9476 27.4734 26.8268C27.4734 27.6037 27.3548 28.2969 27.1176 28.9064C26.8804 29.5158 26.507 30.0159 25.9976 30.4067C25.4894 30.7965 24.8245 31.0567 24.0029 31.1873C23.9988 31.188 23.9948 31.1891 23.991 31.1906C23.958 31.2037 23.9457 31.244 23.9657 31.2734L27.5967 36.6C27.6076 36.6159 27.6134 36.6347 27.6134 36.654C27.6134 36.7071 27.5704 36.75 27.5174 36.75H26.016ZM27.9203 22.4584C28.5156 22.4584 28.9565 23.0118 28.8234 23.592C28.7264 24.0144 28.3496 24.3132 27.9162 24.3113L23.5304 24.2918C22.9418 24.2892 22.5081 23.7404 22.6417 23.1672C22.7383 22.7521 23.1083 22.4584 23.5345 22.4584H27.9203Z" fill="#FFB114"/>
            </svg>`,
      title: 'Finance Horoscope',
      content_heading: 'Finance Horoscope',
      content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="49" viewBox="0 0 50 49" fill="none">
  <path d="M5.33058 22.9687C5.18358 21.9438 5.09375 20.8964 5.09375 19.8164C5.09375 16.956 5.87571 9.98577 13.1257 7.0866C16.2617 5.83098 20.7819 5.16131 25.0102 8.69952C29.2773 5.17356 33.7628 5.84118 36.8764 7.0866C44.1263 9.98577 44.9083 16.954 44.9083 19.8164C44.9083 20.8964 44.8185 21.9438 44.6715 22.9687H33.3116C31.4292 22.9687 29.6836 23.9038 28.6403 25.4698L27.5051 27.1705L24.412 17.8911C24.2262 17.3378 23.7423 16.9356 23.1625 16.858C22.5868 16.7723 22.011 17.0377 21.6843 17.5256L18.8137 21.8315C18.3401 22.5441 17.5459 22.9687 16.6904 22.9687H5.33058ZM33.3096 26.0312C32.4541 26.0312 31.6599 26.4559 31.1862 27.1684L28.3157 31.4743C28.0278 31.9031 27.55 32.1562 27.0417 32.1562C26.9743 32.1562 26.9069 32.1521 26.8375 32.1419C26.2577 32.0644 25.7738 31.6642 25.588 31.1089L22.4949 21.8295L21.3597 23.5302C20.3164 25.0961 18.5708 26.0312 16.6884 26.0312H6.01863C8.21342 33.1607 14.367 38.7916 24.4304 42.8117C24.6141 42.8852 24.806 42.9219 24.998 42.9219C25.1899 42.9219 25.3818 42.8852 25.5655 42.8117C35.6289 38.7937 41.7825 33.1607 43.9773 26.0312H33.3055H33.3096Z" fill="#3B3B3B"/>
            </svg>`,
      title: 'Health Horoscope',
      content_heading: 'Health Horoscope',
      content: " horoscope is an astrological chart created based on the positions of the Sun, Moon, and other celestial bodies at the time of a person's birth. It provides insights into an individual's personality, likes, dislikes, thoughts, love life, career, health, and more. Horoscopes offer a glimpse into future events and can be used to make informed decisions.<br><br>Horoscopic traditions are primarily associated with the Western Zodiac. Vedic Astrology, on the other hand, uses a different system with the Kundali (birth chart). While some debate the scientific validity of horoscopes, their accuracy in reflecting individual traits continues to intrigue many.<br><br>By reading your daily horoscope, weekly horoscope, monthly horoscope, or yearly horoscope, you can gain valuable insights into various aspects of your life. Understanding the positions of the planets and their influence on your zodiac sign can help you navigate challenges and opportunities. Whether you're interested in your love life, career prospects, financial situation, or health, your horoscope can provide guidance and support.<br><br>Horoscopes are sometimes referred to as figura charts, astrological graphs, star charts, or natal charts. Regardless of the name, the purpose remains the same: to offer astrological insights and predictions based on the positions of celestial bodies.<br><br>People also want to know about Yesterday’s horoscope, Daily Horoscope and Tomorrow’s Horoscope",
    },
  ]
  
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizingSVG();
  }

  private sanitizingSVG() {
    this.options.forEach(o => {
      if (o.svg){
        o.safeSvg = this.sanitizer.bypassSecurityTrustHtml(o.svg)
      }
    });
  }

  changeHoroscopeType(type: string) {
    let option = this.options.filter(o => o.title == type);
    if(option){
      this.selectedTypeTitle = option[0].title,
      this.selectedArticle = {
        title: '',
        content: option[0].content,
      };
    } 
  }

}
