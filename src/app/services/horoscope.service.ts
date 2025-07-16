import { Injectable, OnInit } from '@angular/core';
import { api_key, baseUrl } from '../configs/app.config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { TZodiacSign } from '../types/tzodiac-sign';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService implements OnInit {

  private baseUrl = `${baseUrl}/prediction`;
  private apiKey = api_key;
  date = "";

  zodiacSigns: Array<TZodiacSign> = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let d=new Date();
    this.date = `${d.getDate()}%2F${d.getMonth()}%2F${d.getFullYear()}`
  }

  zodiacTodayHoroscope(zodiac: TZodiacSign){
    const today = this.formatDate(new Date());

    const i = this.zodiacSigns.indexOf(zodiac) + 1;
    const params = new HttpParams()
      .set('zodiac', i)
      .set('date', today)
      .set('api_key', this.apiKey)
      .set('lang', 'en')
      .set('split', 'false')
      .set('type', 'big');
    const url = `${this.baseUrl}/daily-sun`
    return this.http.get(url, { params });
  }

  zodiacTomorrowHoroscope(zodiac: TZodiacSign){
    const date = this.formatDate(new Date(), 1);
    const i = this.zodiacSigns.indexOf(zodiac)+1;
    const params = new HttpParams()
      .set('zodiac',i)
      .set('date', date)
      .set('api_key',this.apiKey)
      .set('lang', 'en')
      .set('split', 'false')
      .set('type', 'big');
    const url = `${this.baseUrl}/daily-sun`
    return this.http.get(url, { params });
  }

  zodiacWeeklyHoroscope(zodiac: TZodiacSign){
    const i = this.zodiacSigns.indexOf(zodiac)+1;
    const params = new HttpParams()
      .set('zodiac',i)
      .set('week','thisweek')
      .set('show_same','true')
      .set('api_key',this.apiKey)
      .set('lang','en');
    const url = `${this.baseUrl}/weekly-sun`;
    return this.http.get(url, { params });
  }

  zodiacYearlyHoroscope(zodiac:TZodiacSign){
    const currentYear: number = new Date().getFullYear();
    const i = this.zodiacSigns.indexOf(zodiac)+1;
    const params = new HttpParams()
      .set('year',currentYear)
      .set('zodiac',i)
      .set('api_key',this.apiKey)
      .set('lang','en');
    const url = `${this.baseUrl}/yearly`;
    return this.http.get(url, { params });
  }


  private formatDate(date: Date, add: number = 0): string {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + add);

    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  }
  
}
