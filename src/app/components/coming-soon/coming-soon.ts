import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { SectionTag } from "../section-tag/section-tag";
import { AstrologySection } from "../astrology-section/astrology-section";

@Component({
  selector: 'app-coming-soon',
  imports: [SectionTag, AstrologySection],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.css'
})
export class ComingSoon implements OnInit {

  pageBrief: string = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos";
  
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setColorSubject(false);
  }

}
