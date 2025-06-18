import { Component, Input } from '@angular/core';
import { SectionTag } from "../../section-tag/section-tag";
import { ISvgColors } from '../../../interfaces/isvg-link';
import { DayOption } from "./day-option/day-option";
import { IHoroscopeReport } from '../../../interfaces/ihoroscope-report';
import { HoroscopeReport } from "./horoscope-report/horoscope-report";

@Component({
  selector: 'app-presice-section',
  imports: [
    SectionTag,
    DayOption,
    HoroscopeReport
],
  templateUrl: './presice-section.html',
  styleUrl: './presice-section.css'
})
export class PresiceSection {

  @Input() svgColor!: ISvgColors;

  title = "Precise Horoscope";
  dayOption = ['Yesterday','Tomorrow','Today','Weekly','Monthly','Yearly'];
  selectedOption: string = 'Today';
  selectedReport: IHoroscopeReport = {
      day: "Today",
      date: "Monday 16, 2025",
      title: "Daily planetary movements Today",
      report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out.",
    };

  horoscopeReport: IHoroscopeReport[] = [
    {
      day: "Yesterday",
      date: "Monday 16, 2025",
      title: "Daily planetary movements Yesterday",
      report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out.",
    },
    {
      day: "Tomorrow",
      date: "Monday 16, 2025",
      title: "Daily planetary movements Tomorrow",
      report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out.",
    },
    {
      day: "Today",
      date: "Monday 16, 2025",
      title: "Daily planetary movements Today",
      report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out.",
    },
    {
      day: "Weekly",
      date: "Monday 16, 2025",
      title: "Daily planetary movements Weekly",
      report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out.",
    },
    {
      day: "Monthly",
      date: "Monday 16, 2025",
      title: "Daily planetary movements Monthly",
      report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out.",
    },
    {
      day: "Yearly",
      date: "Monday 16, 2025",
      title: "Daily planetary movements Yearly",
      report: "Astroyogi astrologers anything that you do today, be it your work or personal matters will have far reaching effects, due to the presence of Moon in Capricorn. The Capricorn Moon helps you understand the purpose of your life and gives you the determination to continue working hard and courage to face any difficulties. Forget about the past and concentrate on the present. What you always wanted to achieve is now just inches away, all you need to do is make the effort to reach out and grab it. But, be wary of people and things that might prevent you from achieving your goals. A special friend of the opposite sex might talk you into doing a favour for him/her which might not go down well with your spouse or partner and may cause a bit of tension in the home. Letting your partner know how much you care will reclaim the peace in the house. Also, today is a good travel so why not take advantage of this and chill out.",
    },
  ]

  changeReport(option: string) {
    let report = this.horoscopeReport.filter(r => r.day == option)
    if (report) {
      this.selectedOption = option;
      this.selectedReport = report[0];
    }
  }

}
