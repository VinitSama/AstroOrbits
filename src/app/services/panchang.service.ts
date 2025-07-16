import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_key, baseUrl } from '../configs/app.config';

@Injectable({
  providedIn: 'root'
})
export class PanchangService {

  private apiUrl = `${baseUrl}/panchang/panchang`;
  private apiKey = api_key;

  constructor(private http: HttpClient) { }

  getPanchang(add: number = 0) {
    const date = this.formatDate(new Date(), add);
    const time = this.getCurrentTime();
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('date', date)
      .set('tz','5.5')
      .set('lat','28.7')
      .set('lon', '77.1')
      .set('time',time)
      .set('lang','en')
    return this.http.get(this.apiUrl, {params});
  }


  private formatDate(date: Date, add: number = 0): string {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + add);

    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  private getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

}
