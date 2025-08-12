import { Injectable } from '@angular/core';
import { IKundliForm, IMatchData } from '../interfaces/ikundli-form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private kundliFormData!: IKundliForm;
  private kundliMatchForm!: IMatchData

  constructor() { }

  setKundliFormData(form: IKundliForm): void {
    this.kundliFormData = form;
  }

  getKundliFormData(): IKundliForm {
    return this.kundliFormData;
  }

  setMatchData(form: IMatchData): void {
    this.kundliMatchForm = form;
  }

  getMatchData(): IMatchData {
    return this.kundliMatchForm;
  } 

}
