import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { FormService } from '../../../services/form.service';
import { CommonModule } from '@angular/common';
import { IRudrakshForm } from '../../../interfaces/irudraksh-form';
import { Router } from '@angular/router';
import { AstrologySection } from "../../astrology-section/astrology-section";
import { RudrakshSection } from "../../rudraksh-section/rudraksh-section";

@Component({
  selector: 'app-rudraksha-report',
  imports: [
    CommonModule,
    AstrologySection,
    RudrakshSection
],
  templateUrl: './rudraksha-report.html',
  styleUrl: './rudraksha-report.css'
})
export class RudrakshaReport implements OnInit{

  profile: IRudrakshForm = {
    name: "John Doe",
    dob: "1990-01-01",
    tob: "13:45", // 24-hour format (e.g., 13:45 for 1:45 PM)
    place: "New York, USA",
    email: 'abc@eg.com',
    phone: "+911234567890",
    purpose: ""
  }

  rudrakshCard: number[] = [1,2,4];

  constructor(private headerService: HeaderService, private formService: FormService, private router: Router) {}

  ngOnInit(): void {
    this.headerService.setColorSubject(true);
    this.headerService.setNavSubject('Calculator');
    this.setProfile();
  }

  private setProfile() {
    const pro = this.formService.getRudrakshData();
    if (pro) {
      this.profile = pro;
    }
  }

  changDetails() {
    this.router.navigate(['rudrakhs-calculator']);
  }
}
