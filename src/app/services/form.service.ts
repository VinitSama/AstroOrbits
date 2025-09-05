import { Injectable } from '@angular/core';
import { IKundliForm, IMatchData } from '../interfaces/ikundli-form';
import { ILoveProfile } from '../interfaces/ilove-profile';
import { IRudrakshForm } from '../interfaces/irudraksh-form';
import { TZodiacSign } from '../types/tzodiac-sign';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private kundliFormData!: IKundliForm;
  private kundliMatchForm!: IMatchData
  private loveProfile!: ILoveProfile;
  private rudrakshForm!: IRudrakshForm;
  private zodiacSign!: TZodiacSign | null;

  constructor() { }

  setZodiacSign(sign: TZodiacSign | null) {
    this.zodiacSign = sign;
  }

  getZodiacSign(): TZodiacSign | null {
    return this.zodiacSign
  }

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
  
  setRudrakshData(form: IRudrakshForm): void {
    this.rudrakshForm = form;
  }

  getRudrakshData(): IRudrakshForm {
    return this.rudrakshForm;
  } 

}
