import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  showColorSubject = new Subject<boolean>();

  constructor() { }

  getColorSubject(){
    return this.showColorSubject;
  }

  setColorSubject(val: boolean){
    this.showColorSubject.next(val)
  }
}
