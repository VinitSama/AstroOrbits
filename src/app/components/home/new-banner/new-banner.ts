import { Component } from '@angular/core';

@Component({
  selector: 'app-new-banner',
  imports: [
    
  ],
  templateUrl: './new-banner.html',
  styleUrl: './new-banner.css'
})
export class NewBanner {
  currentYear = new Date().getFullYear();
}
