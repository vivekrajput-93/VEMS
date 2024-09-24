import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../app/components/Layouts/header/header.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from '../app/components/auth/login/login.component';
import { RegisterComponent } from '../app/components/auth/register/register.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';
import { DashboardComponent } from './pages/User/dashboard/dashboard.component';
import { CreateEmployeeComponent } from './pages/Employees/create-employee/create-employee.component';
import { routes } from './app.routes'; // Import your routes
import { CustomModalComponent } from './pages/Department/add-department/custom-modal/custom-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterModule, SidebarComponent, CustomModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VEMS';
}
