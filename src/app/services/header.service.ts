import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TNavName } from '../types/tnav-name';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private showColorSubject = new Subject<boolean>();
  private selectedNavSubject = new Subject<number>();
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
    console.log("saved", this.showColorSubject)
    this.showColorSubject.next(val)
  }

  getColorSubject(){
    return this.showColorSubject;
  }

  setNavSubject(val: TNavName) {
    this.selectedNavSubject.next(this.navMapper.get(val) || 0);
  }

  getNavSubject() {
    return this.selectedNavSubject;
  }

}
