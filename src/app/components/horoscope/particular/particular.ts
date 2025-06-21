import { Component, Input, OnInit } from '@angular/core';
import { TZodiacSign } from '../../../types/tzodiac-sign';
import { IZodiacHoroscope } from '../../../interfaces/izodiac-horoscope';
import { IZodiacCard } from '../../../interfaces/izodiac-card';
import { ZodiacServices } from '../../../services/zodiac.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particular',
  imports: [
    CommonModule
  ],
  templateUrl: './particular.html',
  styleUrl: './particular.css'
})
export class Particular implements OnInit {

  @Input() zodiac!: TZodiacSign;
  @Input() day!: string;
  
  zodiacDetails!: IZodiacCard [];

  report: IZodiacHoroscope = {
    brief: "Dear Aries, the Moon is in Capricorn today. Your legal case, which has been going on for a very long time, will finally be resolved in your favor. As a result, you will finally be relieved of the stress and anxiety this case has put on you. Astroyogi astrologers suggest you to move on with your life and resume your routine with new energy and passion. You can finally give your time to the things that matter in life and spare some time for mental peace. So, don’t wait any longer to work on your mental and emotional health.",
    luckyNo: 1,
    luckyColor: "Cyan",
    mood: "Innovative",
    positivity: 85,
    remedy: "Meditate for 10 minutes"
  }

  constructor(private zodiacService: ZodiacServices) {}

  ngOnInit(): void {
    this.loadCards();
  }

  private loadCards(){
    this.zodiacDetails = this.zodiacService.getAllCards();
  }

}
