import { Component, Input, OnInit } from '@angular/core';
import { IKundliDetail } from '../../../../interfaces/ikundli-detail';
import { CommonModule } from '@angular/common';
import { DetailsTable } from '../../../details-table/details-table';
import { IDetailTable } from '../../../../interfaces/idetail-table';
import { IKundliForm } from '../../../../interfaces/ikundli-form';

@Component({
  selector: 'app-kundli-basic-details',
  imports: [
    CommonModule,
    DetailsTable
  ],
  templateUrl: './kundli-basic-details.html',
  styleUrl: './kundli-basic-details.css'
})
export class KundliBasicDetails implements OnInit {
  @Input() profile!: IKundliForm;
  tables: IDetailTable[] = [
    {
      title: "Basic Details",
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
      title: "Kundli Details",
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
      title: "Favourable",
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

  ngOnInit(): void {
    this.profileSet();
  }
  
  private profileSet() {
    this.tables[0].kundliDetail[0].value = this.profile.name;
    this.tables[0].kundliDetail[2].value = `${this.profile.dob} | ${this.profile.time}`;
    this.tables[0].kundliDetail[4].value = this.profile.place;
    this.tables[0].kundliDetail[6].value = this.profile.gender == 'm' ? 'Male' : 'Female';
  }

  private parseJsonToIKundliDetail(obj: Record<string, string>): IKundliDetail[] {
    return Object.entries(obj).map(([key, value]) => {
      const isDate = !isNaN(Date.parse(value));
      return {
        name: key,
        value: isDate ? new Date(value).toISOString() : value
      };
    });
  }

}
