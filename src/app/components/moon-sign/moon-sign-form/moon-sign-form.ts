import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateMask } from '../../../directives/date-mask';
import { IMoonSignForm } from '../../../interfaces/imoon-sign-form';

@Component({
  selector: 'app-moon-sign-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateMask,
  ],
  templateUrl: './moon-sign-form.html',
  styleUrl: './moon-sign-form.css'
})
export class MoonSignForm {

  @Output() formValueEmitter = new EventEmitter<IMoonSignForm>();

  submitted = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    DOB: new FormControl('', [Validators.required, this.dateValidator]),
    time: new FormControl('', [Validators.required]),
    place: new FormControl('' ,[Validators.required]),
  })
  gender: 'm' | 'f' = 'm';

  changeGender(gender: 'm' | 'f') {
    this.gender = gender;
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    const dobInput = document.querySelector('input[formControlName="DOB"]') as HTMLInputElement;
    if (dobInput) {
      dobInput.blur();
    }
    const form = this.form.value;
    setTimeout(() => {
      if (this.form.valid && form.DOB && form.name && form.place && form.time) {
        // console.log('Form Submitted', this.form.value, this.gender);
        let f: IMoonSignForm = {
          name: form.name,
          dob: form.DOB,
          gender: this.gender,
          place: form.place,
          time: form.time
        }
        this.formValueEmitter.emit(f);
      } else {
        console.log('Form is invalid');
      }
    }, 0);
  }

  dateValidator(control: AbstractControl) {
    const value = control.value;
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 8) return { invalidDate: true };
    const day = parseInt(digits.substring(0, 2), 10);
    const month = parseInt(digits.substring(2, 4), 10);
    const year = parseInt(digits.substring(4, 8), 10);
    const isValid = !(year < 1000 ||
      year > new Date(year, month, 0).getFullYear() ||
      month < 1 || month > 12 ||
      day < 1 || day > new Date(year, month, 0).getDate());
    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (inputDate > today) {
      return { invalidDate: true, dateInFuture: true };
    }
    return isValid ? null : { invalidDate: true };
  }

}
