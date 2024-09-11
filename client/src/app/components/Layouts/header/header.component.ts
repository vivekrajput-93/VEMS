import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  ///////////////////////      Dropdown ////////////////////////
  isDropdownOpen = false;


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
