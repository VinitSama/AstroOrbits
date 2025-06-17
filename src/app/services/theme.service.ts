import { Injectable } from '@angular/core';
import { ITheme } from '../interfaces/itheme';
import { Subject } from 'rxjs';
import { ISvgColors } from '../interfaces/isvg-link';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeKey = 'theme-preference';
  private themes: ITheme[] = [
    {name: 'main-light', displayName: 'Light Mode'}
  ]
  private themeUpdateSubject = new Subject<number>();

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
    this.themeUpdateSubject.next(1);
  }

  loadTheme(defaultThemeName: string = 'main-light') {
    const savedTheme = localStorage.getItem(this.themeKey);
    const validTheme = this.themes.find(t => t.name === savedTheme);
    this.setTheme(validTheme?.name || defaultThemeName);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const index = this.themes.findIndex(t => t.name === current);
    const nextIndex = (index + 1) % this.themes.length;
    this.setTheme(this.themes[nextIndex].name);
  }

  getCurrentTheme(): string | null {
    return document.documentElement.getAttribute('data-theme');
  }

  getSvgColor(): ISvgColors {
    let c1 = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    let c2 = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
    let c3 = getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color').trim();
    let c4 = getComputedStyle(document.documentElement).getPropertyValue('--fourth-color').trim();
    let colors: ISvgColors = {
      primary: c1,
      secondary: c2,
      tertiary: c3,
      stroke: c4,
    }
    console.log(colors)
    return colors;
  }

  getThemeSubject() {
    return this.themeUpdateSubject;
  }
  
}
