import { Component, EventEmitter, Output } from '@angular/core';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-menu',
  imports: [Navbar],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  @Output() close = new EventEmitter<void>();

  closeMenu() {
    this.close.emit();
  }
}
