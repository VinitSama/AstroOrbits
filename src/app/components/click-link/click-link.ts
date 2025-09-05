import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TNavigationLink } from '../../types/tnavogation-link';

@Component({
  selector: 'app-click-link',
  imports: [],
  templateUrl: './click-link.html',
  styleUrl: './click-link.css'
})
export class ClickLink {
  @Input() brief: string = 'Don’t know your sign?';
  @Input() link: string = 'Check here';
  @Input() navigationLink: TNavigationLink | null = null;


  constructor(private router: Router){}

  goToPage(page: TNavigationLink | null) {
    if (page == 'home') {
      this.router.navigate([page])
    }else if (page == 'numerology'){
      this.router.navigate([page,"0","0"])
    } else if (page){
      this.router.navigate([page]);
    }
  }

}
