import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { HeaderService } from '../../../../services/header.service';

@Component({
  selector: 'app-menu',
  imports: [Navbar],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {

  @Output() close = new EventEmitter<void>();

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
      
  }

  closeMenu() {
    this.close.emit();
  }

}
