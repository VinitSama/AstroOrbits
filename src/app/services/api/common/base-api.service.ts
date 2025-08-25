import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

export interface LocationData {
  lat: string;
  long: string;
}

export interface IParam{ [key: string]: any };

@Injectable({
  providedIn: 'root'
})
export class BaseApiService{
  private readonly baseUrl = "https://api.vedicastroapi.com/v3-json";
  private readonly locApi = 'https://ipapi.co/json/';
  private date!: string;
  private lang: string = 'en';
  private locationSubject = new BehaviorSubject<LocationData | null>(null);
  location$ = this.locationSubject.asObservable();

  constructor(private http: HttpClient) {
    const today = new Date();
    this.date = today.toLocaleDateString('en-GB');

    this.getLatLong().subscribe({
      next: (data) => {
        const location: LocationData = {
          lat: data.latitude,
          long: data.longitude
        };
        this.locationSubject.next(location);
        console.log("Approx location:", location);
      },
    });
  }

  private getLatLong(): Observable<any> {
    return this.http.get(this.locApi).pipe(
      catchError(this.handleError)
    );
  }

  getDate(days: number): string {
    const [day, month, year] = this.date.split('/').map(Number);
    const dateObj = new Date(year, month - 1, day);
    dateObj.setDate(dateObj.getDate() + days);
    return dateObj.toLocaleDateString('en-GB');
  }

  getYear(): string {
    const [day, month, year] = this.date.split('/').map(Number);
    return year.toString();
  }

  getLanguage() {
    return this.lang;
  }

  get<T>(endpoint: string, params?: IParam): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {params}).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(endpoint: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(endpoint: string, body: unknown): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => error.error?.message || 'Something went wrong');
  }
}
