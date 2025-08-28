import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResposiveService {

  
  private readonly xxSmall = '(max-width: 375px)';
  private readonly extraSmall = '(min-width: 376px) and (max-width: 575px)';
  private readonly small = '(min-width: 576px) and (max-width: 765px)';
  private readonly medium = '(min-width: 766px) and (max-width: 991px)';
  private readonly large = '(min-width: 992px) and (max-width: 1199px)';
  private readonly extraLarge = '(min-width: 1200px) and (max-width: 1399px)';
  private readonly xxLarge = '(min-width: 1400px)';

  breakpointObserver = inject(BreakpointObserver);

  screenWidth = toSignal(this.breakpointObserver.observe([ this.xxSmall, this.extraSmall, this.small, this.medium, this.large, this.extraLarge, this.xxLarge]));

  xxSmallWidth = computed(() => this.screenWidth()?.breakpoints[this.xxSmall]); 
  extraSmallWidth = computed(() => this.screenWidth()?.breakpoints[this.extraSmall]); 
  smallWidth = computed(() => this.screenWidth()?.breakpoints[this.small]); 
  mediumWidth = computed(() => this.screenWidth()?.breakpoints[this.medium]); 
  largeWidth = computed(() => this.screenWidth()?.breakpoints[this.large]); 
  extraLargeWidth = computed(() => this.screenWidth()?.breakpoints[this.extraLarge]); 
  xxLargeWidth = computed(() => this.screenWidth()?.breakpoints[this.xxLarge]); 
}
