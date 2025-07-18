import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-join-banner',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
  templateUrl: './join-banner.html',
  styleUrl: './join-banner.css'
})
export class JoinBanner {
  selctedCode: number = 91;
  phoneForm: FormGroup;
  codes: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,91]

  constructor(private fb: FormBuilder){
    this.phoneForm = this.fb.group({
      phoneNo: ['', Validators.required],
    });
  }

  submit(){
    if (this.phoneForm.valid) {
      console.log('form value: ',this.selctedCode, this.phoneForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  changeCode(c: number){
    this.selctedCode = c;
  }
}
