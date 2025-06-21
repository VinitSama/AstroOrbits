import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IKundliForm } from '../../interfaces/ikundli-form';
import { CommonModule } from '@angular/common';
import { DateMask } from '../../directives/date-mask';

@Component({
  selector: 'app-kundli-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateMask,
  ],
  templateUrl: './kundli-form.html',
  styleUrl: './kundli-form.css'
})
export class KundliForm implements OnInit, OnChanges {

  @Input() gender: 'm' | 'f' = 'm';
  @Input() showGenderOption: boolean = true;
  @Input() submitBtnOption: number = 1;  // 1 for submit from this container, 2 for submit through parent form
  @Input() formData: IKundliForm | null = null;
  
  @Output() formValueEmitter = new EventEmitter<IKundliForm>();
  @Output() normalSubmitEmitter = new EventEmitter<IKundliForm>() //for submiBtnOption = 1
  @Output() useParentSubmitEmitter = new EventEmitter<any>(); //for submiBtnOption = 1

  submitted: boolean = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    DOB: new FormControl('', [Validators.required, this.dateValidator]),
    time: new FormControl('', [Validators.required]),
    place: new FormControl('' ,[Validators.required]),
  })

  ngOnInit(): void {
    if (this.formData){
      this.patchForm(this.formData);
    }

    this.form.valueChanges.subscribe(val => {
      if (this.form.valid) {
        const updated: IKundliForm = {
          name: val.name || '',
          dob: val.DOB || '',
          place: val.place || '',
          time: val.time || '',
          gender: this.gender
        };
        this.formValueEmitter.emit(updated);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData'] && this.formData) {
      this.patchForm(this.formData);
    }
  }

  patchForm(data: IKundliForm) {
    this.form.patchValue({
      name: data.name,
      DOB: data.dob,
      place: data.place,
      time: data.time, 
    })
  }

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
        let f: IKundliForm = {
          name: form.name,
          dob: form.DOB,
          gender: this.gender,
          place: form.place,
          time: form.time
        }
        this.normalSubmitEmitter.emit(f);
      }
    }, 0);
  }

  submitThroughParent() {
    this.useParentSubmitEmitter.emit();
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
