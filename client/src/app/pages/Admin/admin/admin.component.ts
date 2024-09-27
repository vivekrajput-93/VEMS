import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/Layouts/header/header.component";
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarToggleService } from '../../../services/sidebar/sidebar-toggle.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  isSidebarVisible: boolean = false;

  constructor(private sidebarToggleService: SidebarToggleService) {}

  ngOnInit() {
    this.sidebarToggleService.getSidebarState().subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }

}
