import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IKundliForm } from '../../interfaces/ikundli-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kundli-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  dobFocused: boolean = false;
  tobFocused: boolean = false;
  blurColor: string = "#FFB114";

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    DOB: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    place: new FormControl('' ,[Validators.required]),
  })

  ngOnInit(): void {
    if (this.formData){
      this.patchForm(this.formData);
    }

    this.form.valueChanges.subscribe(val => {
      const updated: IKundliForm = {
        name: val.name || '',
        dob: val.DOB || '',
        place: val.place || '',
        time: val.time || '',
        gender: this.gender
      };
      this.formValueEmitter.emit(updated);
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

  

  // dateValidator(control: AbstractControl) {
  //   const value = control.value;
  //   if (!value) return { invalidDate: true };

  //   const parts = value.split('-');
  //   if (parts.length !== 3) return { invalidDate: true };

  //   const [dayStr, monthStr, yearStr] = parts;

  //   const day = parseInt(dayStr, 10);
  //   const month = parseInt(monthStr, 10);
  //   const year = parseInt(yearStr, 10);

  //   if (isNaN(day) || isNaN(month) || isNaN(year)) {
  //     return { invalidDate: true };
  //   }

  //   // Check if the date components are in valid range
  //   const isValid = !(year < 1000 ||
  //     year > 9999 ||
  //     month < 1 || month > 12 ||
  //     day < 1 || day > new Date(year, month, 0).getDate());

  //   if (!isValid) {
  //     return { invalidDate: true };
  //   }

  //   // Check for future date
  //   const inputDate = new Date(year, month - 1, day);
  //   const today = new Date();
  //   today.setHours(0, 0, 0, 0);

  //   if (inputDate > today) {
  //     return { invalidDate: true, dateInFuture: true };
  //   }

  //   return null; // valid date
  // }


  private isPickerOpen = false;

openDatePicker(input: HTMLInputElement) {
  if (this.isPickerOpen) return;

  this.dobFocused = true;

  // Set flag and clear it after delay (simulate calendar state)
  this.isPickerOpen = true;

  setTimeout(() => {
    this.isPickerOpen = false;
  }, 300); // Adjust delay to match calendar closing time

  if (input.showPicker) {
    input.showPicker();
  } else {
    input.focus();
    this.dobFocused = false;
  }
}

  openTimePicker(input: HTMLInputElement) {
    // this.tobFocused = true;
    // if (input.showPicker) {
    //   input.showPicker();
    // } else {
    //   input.focus();
    //   this.tobFocused = false;
    // }

    if (this.isPickerOpen) return;

    this.tobFocused = true;

    // Set flag and clear it after delay (simulate calendar state)
    this.isPickerOpen = true;

    setTimeout(() => {
      this.isPickerOpen = false;
    }, 300); // Adjust delay to match calendar closing time

    if (input.showPicker) {
      input.showPicker();
    } else {
      input.focus();
      this.tobFocused = false;
    }
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }


  toggleDatePicker(input: HTMLInputElement, event: MouseEvent): void {
    event.stopPropagation();
    if (this.dobFocused) {
      input.blur();
    } else {
      input.focus();
      setTimeout(() => input.showPicker(), 0);
    }
  }

  toggleTimePicker(input: HTMLInputElement, event: MouseEvent): void {
    event.stopPropagation();
    if (this.tobFocused) {
      input.blur();
    } else {
      input.focus();
      setTimeout(() => input.showPicker(), 0);
    }
  }
  

}
