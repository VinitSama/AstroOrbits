import { Injectable, OnInit } from '@angular/core';
import { API_KEY } from '../../configs/app.config';
import { BaseApiService, IParam } from './common/base-api.service';
import { ZodiacServices } from '../zodiac.services';
import { TZodiacSign } from '../../types/tzodiac-sign';
import { THoroscopeSign } from '../../types/thoroscope-sign';
import { TDates } from '../../components/horoscope/particular/particular';
import { map, Observable } from 'rxjs';
import { IZodiacHoroscope } from '../../interfaces/izodiac-horoscope';



@Injectable({
  providedIn: 'root'
})
export class HoroscopeApiService{
  private readonly apiKey = API_KEY;
  private lat!: string;
  private long!: string;
  constructor(private baseApi: BaseApiService, private zodiacService: ZodiacServices) {
    this.baseApi.location$.subscribe(location => {
      if (location) {
        this.lat = location.lat;
        this.long = location.long;
      }
    });
  }

  private getZodiacId(sign: TZodiacSign) {
    const id = this.zodiacService.getZodiacId(sign);
    return id > 0 ? id : 1;
  }

  private getDate(type: TDates) {
    if (type == 'Yesterday') {
      return this.baseApi.getDate(-1);
    } if (type == 'Today') {
      return this.baseApi.getDate(0);
    } if (type == 'Tomorrow') {
      return this.baseApi.getDate(1);
    } else return;
  }

  private starMaker(val: number[]): number[] {
    let res:number[] = [];
    val.forEach(i => {      
      res.push(Math.round((i * 5) / 100));
    })
    return res;
  }

  private getHoroscope(zodiac: TZodiacSign, sign: THoroscopeSign = 'sun', type: TDates = 'Today'): Observable<any> {
    let params:IParam = {
      api_key: this.apiKey,
      zodiac: this.getZodiacId(zodiac),
      lang: this.baseApi.getLanguage(),
    };
    if (type == 'Yesterday' || type == 'Today' || type == 'Tomorrow') {
      params['date'] = this.getDate(type);
      params['type'] = 'big';
      params['split'] = true;
      return this.baseApi.get(`prediction/daily-${sign}`, params);
    } if (type == 'Weekly') {
      params['week'] = 'thisweek';
      params['split'] = true;
      params['type'] = 'big';
      return this.baseApi.get(`prediction/weekly-${sign}`, params);
    } 
    // if (type == 'Yearly') {
    else {
      params['year'] = this.baseApi.getYear();
      return this.baseApi.get('prediction/yearly', params);
    }
  }

  getHoroscopeReport(zodiac: TZodiacSign, sign: THoroscopeSign = 'sun', type: TDates = 'Today'): Observable<IZodiacHoroscope> {
    return this.getHoroscope(zodiac, sign, type).pipe(
      map(data => {
        if (data?.status !== 200) {
          throw new Error('Failed to fetch horoscope data');
        }
        const response = data.response;
        const report: IZodiacHoroscope = {
          luckyInformation: {
            luckyColor: response.lucky_color,
            luckyNumber: response.lucky_number,
          },
          brief: response.bot_response.total_score.split_response,
          stars: this.starMaker([response.bot_response.relationship.score, response.bot_response.health.score, response.bot_response.career.score, response.bot_response.finances.score]),
          particularBrief: [
            response.bot_response.relationship.split_response,
            response.bot_response.health.split_response,
            response.bot_response.career.split_response,
            response.bot_response.finances.split_response,
          ]
        };
        return report;
      })
    );
  }

}
