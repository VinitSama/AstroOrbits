import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMatchData } from '../../../../interfaces/ikundli-form';
import { IDetailTable } from '../../../../interfaces/idetail-table';
import { DetailsTable } from "../../../details-table/details-table";

@Component({
  selector: 'app-matching-basic-details',
  imports: [
    CommonModule,
    DetailsTable
],
  templateUrl: './matching-basic-details.html',
  styleUrl: './matching-basic-details.css'
})
export class MatchingBasicDetails {
@Input() profiles!: IMatchData;
  tables: IDetailTable[] = [
    {
      title: "Details",
      kundliDetail: [
        {
          name: "Name",
          value: "ABC",
        },
        {
          name: "Nakshatra",
          value: "ABC",
        },
        {
          name: "Birth Date & Time",
          value: "19/03/1996 | 7:55 AM",
        },
        {
          name: "Ascendant",
          value: "Aries",
        },
        {
          name: "Birth Place",
          value: "Noida",
        },
        {
          name: "Sign",
          value: "Pisces",
        },
        {
          name: "Gender",
          value: "Male",
        },
      ]
    },
    {
      title: "Details",
      kundliDetail: [
        {
          name: "Name",
          value: "ABC",
        },
        {
          name: "Nakshatra",
          value: "ABC",
        },
        {
          name: "Birth Date & Time",
          value: "19/03/1996 | 7:55 AM",
        },
        {
          name: "Ascendant",
          value: "Aries",
        },
        {
          name: "Birth Place",
          value: "Noida",
        },
        {
          name: "Sign",
          value: "Pisces",
        },
        {
          name: "Gender",
          value: "Male",
        },
      ]
    },
  ]

  boySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <g clip-path="url(#clip0_1571_2087)">
    <path d="M10.9925 0.908203H7.68048C7.34448 0.908203 7.08048 1.1722 7.08048 1.5082C7.08048 1.8442 7.34448 2.1082 7.68048 2.1082H9.52848L7.32048 4.3162C5.61648 3.0442 3.19248 3.1642 1.65648 4.7002C-0.0235156 6.3802 -0.0235156 9.1402 1.65648 10.8202C3.33648 12.5002 6.09648 12.5002 7.77648 10.8202C9.31248 9.2842 9.45648 6.8362 8.16048 5.1562L10.3685 2.9482V4.8202C10.3685 5.1562 10.6325 5.4202 10.9685 5.4202C11.3045 5.4202 11.5685 5.1562 11.5685 4.8202V1.5082C11.5925 1.1722 11.3285 0.908203 10.9925 0.908203ZM6.96048 9.9802C5.73648 11.2042 3.74448 11.2042 2.52048 9.9802C1.29648 8.7562 1.29648 6.7642 2.52048 5.5402C3.74448 4.3162 5.73648 4.3162 6.96048 5.5402C8.18448 6.7642 8.18448 8.7562 6.96048 9.9802Z" fill="#240028"/>
  </g>
  <defs>
    <clipPath id="clip0_1571_2087">
      <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>`;
  girlSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <g clip-path="url(#clip0_1571_2097)">
    <path d="M8.8187 7.30094C10.3729 5.7472 10.3729 3.21907 8.8187 1.66532C7.26446 0.111559 4.73556 0.111559 3.1813 1.66532C1.62707 3.21907 1.62707 5.7472 3.1813 7.30094C3.83919 7.95862 4.67172 8.33782 5.531 8.43874V9.77287H4.59308C4.33407 9.77287 4.12412 9.98278 4.12412 10.2417C4.12412 10.5006 4.33407 10.7105 4.59308 10.7105H5.531V12.0312C5.53103 12.2901 5.74098 12.5 6.00001 12.5C6.25902 12.5 6.46897 12.2901 6.46897 12.0312V10.7105H7.40692C7.66593 10.7105 7.87588 10.5006 7.87588 10.2417C7.87588 9.98278 7.66593 9.77287 7.40692 9.77287H6.46897V8.43876C7.32829 8.33782 8.16081 7.95862 8.8187 7.30094ZM3.84454 6.63792C2.656 5.44975 2.656 3.51649 3.84454 2.32832C5.03305 1.14021 6.9669 1.14014 8.15549 2.32832C9.34403 3.51649 9.34403 5.44975 8.15549 6.63792C6.96695 7.82606 5.03307 7.82606 3.84454 6.63792Z" fill="#240028"/>
  </g>
  <defs>
    <clipPath id="clip0_1571_2097">
      <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>`;

  ngOnInit(): void {
    this.profileSet();
  }
  
  private profileSet() {
    this.tables[0].kundliDetail[0].value = this.profiles['boy'].name;
    this.tables[1].kundliDetail[0].value = this.profiles['girl'].name;
    this.tables[0].kundliDetail[2].value = this.profiles['boy'].dob;
    this.tables[1].kundliDetail[2].value = this.profiles['girl'].dob;
    this.tables[0].kundliDetail[4].value = this.profiles['boy'].place;
    this.tables[1].kundliDetail[4].value = this.profiles['girl'].place;
    this.tables[0].kundliDetail[6].value = this.profiles['boy'].gender == 'm' ? 'Male' : 'Female';
    this.tables[1].kundliDetail[6].value = this.profiles['girl'].gender == 'm' ? 'Male' : 'Female';
    this.tables[0].title = `${this.profiles.boy.name}'s Details`;
    this.tables[1].title = `${this.profiles.girl.name}'s Details`;
  }
}
