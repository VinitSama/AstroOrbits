import { Injectable } from '@angular/core';
import { IKundliForm, IMatchData } from '../interfaces/ikundli-form';
import { ILoveProfile } from '../interfaces/ilove-profile';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private kundliFormData!: IKundliForm;
  private kundliMatchForm!: IMatchData
  private loveProfile!: ILoveProfile;

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
  
  setLoveData(form: ILoveProfile): void {
    this.loveProfile = form;
  }

  getLoveData(): ILoveProfile {
    return this.loveProfile;
  } 

}
