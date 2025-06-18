import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]',
  standalone: true,
})
export class DateMask {
private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el;
    const rawValue = input.value;
    const selectionStart = input.selectionStart ?? 0;

    // Remove all non-digit characters
    let digits = rawValue.replace(/\D/g, '');

    if (digits.length > 8) {
      digits = digits.substr(0, 8);
    }

    // Build formatted string progressively (dd/MM/yyyy)
    let formatted = '';
    for (let i = 0; i < digits.length; i++) {
      if (i === 2 || i === 4) {
        formatted += '/';
      }
      formatted += digits[i];
    }

    // Add placeholders for missing chars
    const placeholders = ['_', '_', '/', '_', '_', '/', '_', '_', '_', '_'];
    let result = '';
    for (let i = 0; i < placeholders.length; i++) {
      if (formatted[i]) {
        result += formatted[i];
      } else {
        result += placeholders[i];
      }
    }

    // Calculate new cursor position
    let newPos = selectionStart;

    // When adding slash, if cursor was right after a digit, move cursor one step forward
    // Find how many non-digit chars are before cursor in old and new value
    const oldNonDigitsBeforeCursor = (rawValue.slice(0, selectionStart).match(/\D/g) || []).length;
    const newNonDigitsBeforeCursor = (result.slice(0, newPos).match(/\D/g) || []).length;

    newPos = newPos + (newNonDigitsBeforeCursor - oldNonDigitsBeforeCursor);

    this.el.value = result;

    // Set cursor position, defer to next tick
    setTimeout(() => {
      this.el.setSelectionRange(newPos, newPos);
    }, 0);
  }

  @HostListener('blur')
  onBlur() {
    const value = this.el.value;
    const digits = value.replace(/\D/g, '');

    if (digits.length !== 8) {
      this.el.value = '';
      return;
    }

    const day = parseInt(digits.substring(0, 2), 10);
    const month = parseInt(digits.substring(2, 4), 10);
    const year = parseInt(digits.substring(4, 8), 10);

    if (!this.isValidDate(day, month, year)) {
      this.el.value = '';
      return;
    }
  }

  private isValidDate(day: number, month: number, year: number): boolean {
    if (year < 1000 || year > 9999) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1) return false;

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) return false;

    return true;
  }
}