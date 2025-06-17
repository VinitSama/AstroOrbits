import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Main } from './components/main/main';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Main,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  showLayout: 'main' | 'no-main' = 'main';

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const layout = this.getDeepestChild(this.activatedRoute)?.snapshot?.data?.['layout'];
        this.showLayout = layout === 'main' ? 'main' : 'no-main';
      });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
