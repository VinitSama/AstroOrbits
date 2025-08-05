import { Injectable } from '@angular/core';
import { IKundliForm } from '../interfaces/ikundli-form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private kundliFormData!: IKundliForm;

  constructor() { }

  setKundliFormData(formData: IKundliForm): void {
    this.kundliFormData = formData;
  }

  getKundliFormData(): IKundliForm {
    return this.kundliFormData;
  }

}
