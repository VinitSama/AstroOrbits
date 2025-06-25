import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResposiveService {

  private readonly extraSmall = '(max-width: 575px)';
  private readonly small = '(min-width: 576px) and (max-width: 765px)';
  private readonly medium = '(min-width: 766px) and (max-width: 990px)';
  private readonly large = '(min-width: 991px)';

  breakpointObserver = inject(BreakpointObserver);

  screenWidth = toSignal(this.breakpointObserver.observe([this.extraSmall, this.small, this.medium, this.large]));

  extraSmallWidth = computed(() => this.screenWidth()?.breakpoints[this.extraSmall]); 
  smallWidth = computed(() => this.screenWidth()?.breakpoints[this.small]); 
  mediumWidth = computed(() => this.screenWidth()?.breakpoints[this.medium]); 
  largeWidth = computed(() => this.screenWidth()?.breakpoints[this.large]); 
}
