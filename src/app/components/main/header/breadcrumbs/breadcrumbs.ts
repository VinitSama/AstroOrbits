import { Component, Input, OnInit } from '@angular/core';
import { IBreadcrumb } from '../../../../interfaces/ibreadcrumb';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css'
})
export class Breadcrumbs implements OnInit {
  @Input() showColor: boolean = true;
  breadcrumbs: IBreadcrumb[] = [];

  showBreadcrumbs: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
        this.canShow();
      })
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    for (let child of children) {
      const routeSnapshot = child.snapshot;
      const routeUrl: string = routeSnapshot.url.map(segment => segment.path).join('/');
      let label = routeSnapshot.data['breadcrumb'] || this.formatLabel(routeUrl);

      if (typeof label === 'function') {
        label = label(routeSnapshot);
      }

      if (!label || label == "0") {
        return this.buildBreadcrumbs(child, url, breadcrumbs);
      }

      if (routeUrl) {
        url += `/${routeUrl}`;
      }
      const skip = routeSnapshot.data['skipBreadcrumb'];
      const skipPrevious = routeSnapshot.data['skipPreviousBreadcrumb'];
      // Make a copy to avoid mutating the original array
      let newBreadcrumbs = breadcrumbs.slice();
      if (skipPrevious && newBreadcrumbs.length > 0) {
        newBreadcrumbs.pop();
      }

      // Check if breadcrumb with same label and url already exists
      const exists = newBreadcrumbs.some(bc => bc.label === label && bc.url === (skip ? null : url));
      if (exists || skip) {
        // Skip adding duplicate or skipped breadcrumbs
        return this.buildBreadcrumbs(child, url, newBreadcrumbs);
      }

      newBreadcrumbs.push({
        label,
        url: skip ? null : url,
      });

      return this.buildBreadcrumbs(child, url, newBreadcrumbs);
    }

    return breadcrumbs;
  }

  private formatLabel(segment: string): string {
  return segment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
  }

  private canShow() {
    if (this.breadcrumbs.length>1) {
      this.showBreadcrumbs = true;
    }
    else {
      this.showBreadcrumbs = false;
    }
  }

}
