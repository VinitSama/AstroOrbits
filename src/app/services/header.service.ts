import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TNavName } from '../types/tnav-name';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private showColorSubject = new BehaviorSubject<boolean>(false);
  private selectedNavSubject = new BehaviorSubject<number>(0);
  private navMapper: Map<TNavName, number> = new Map([
    ['Home', 0],
    ['Kundli', 1],
    ['Horoscope', 2],
    ['Numerology', 3],
    ['Tarot Reading', 4],
    ['Panchang', 5],
    ['Calculator', 6],
    ['Blogs', 7],
  ]);

  constructor() { }

  setColorSubject(val: boolean){
    this.showColorSubject.next(val)
  }

  getColorSubject(){
    return this.showColorSubject.asObservable();
  }

  setNavSubject(val: TNavName) {
    this.selectedNavSubject.next(this.navMapper.get(val) || 0);
  }

  getNavSubject() {
    return this.selectedNavSubject.asObservable();
  }

}
