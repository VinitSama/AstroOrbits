import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISvgColors } from '../../../interfaces/isvg-link';
import { ThemeService } from '../../../services/theme.service';
import { CommonModule } from '@angular/common';
import { TarotMenu } from "../tarot-menu/tarot-menu";
import { SectionTag } from "../../section-tag/section-tag";
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogSection } from "../../blog-section/blog-section";
import { TarotPopup } from "../tarot-popup/tarot-popup";

@Component({
  selector: 'app-tarot-reading',
  imports: [
    CommonModule,
    TarotMenu,
    SectionTag,
    ReactiveFormsModule,
    BlogSection,
    TarotPopup
],
  templateUrl: './tarot-reading.html',
  styleUrl: './tarot-reading.css'
})
export class TarotReading implements OnInit {

  selctedOption!: string
  svgColor!: ISvgColors;
  submitted: boolean = false;
  popUp: {
    show: boolean;
    option: number
  } = {
    show: false,
    option: 1,
  }
  questionControl = new FormControl('', Validators.required);

  askName = "One Card Tarot";
  askQues = ["Three Cards", "Welness", "Money", "Love", "State of Mind", "Tarot Style"];
  askDOB = "2025 Tarot";
  noQues = ["Major Arcane", "Minor Arcane"]
  
  oneCard = ["One Card Tarot", "Love", "State of Mind", "Tarot Style"];
  threeCard = ["Three Cards", "Three Cards", "Money"];
  
  
  brief = "Need answers or solutions to your problems in life as soon as possible? One card reading will provide you with suggestions on all aspects of life like business, love, finance and relationships. You can explore any issue in your life by consulting the online tarot reading all by yourself right here."
  
  constructor(private themeService: ThemeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.loadSvgColor();
    this.route.paramMap.subscribe(params => {
      this.loadFromRouteIfNeeded(params);
    });
  }


  //name
  //1,


  //ques
  //2,6,7,8,9,10

  //date
  //3,

  //none
  //4,5,

  //one-c
  //1,8,9,10

  //3-c
  //2,6,7


  private loadSvgColor(){
    this.svgColor = this.themeService.getSvgColor()
  }

  private loadFromRouteIfNeeded(params: ParamMap){
    const option = params.get('option');
    this.selctedOption = option ?? "";
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
    //make api function and call here
  }

  onSubmit(){
    this.submitted =true;
    if (this.questionControl.valid) {
      this.popUp.show=true;
      if (this.oneCard.includes(this.selctedOption)){
        this.popUp.option=1;
      } else {
        this.popUp.option=2;
      }
      console.log(111);
    }
  }

  closePopUp() {
    this.popUp.show=false;
  }
}
