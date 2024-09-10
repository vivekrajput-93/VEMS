import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/Layouts/header/header.component";
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {


}
