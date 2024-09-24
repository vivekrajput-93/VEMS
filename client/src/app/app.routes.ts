import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/auth/login/login.component';
import { RegisterComponent } from '../app/components/auth/register/register.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';
import { CreateEmployeeComponent } from './pages/Employees/create-employee/create-employee.component';

import { AddDepartmentComponent } from './pages/Department/add-department/add-department.component';
import { DashboardComponent } from './pages/User/dashboard/dashboard.component';
import { AdminLeaveComponent } from './pages/Leave/admin-leave/admin-leave.component';
import { DesignationComponent } from './pages/designation/designation.component';
import { AdminDashboardComponent } from './pages/Admin/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path : "user-dashboard", component : DashboardComponent},
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'create-emp', component: CreateEmployeeComponent },
            { path : 'add-dept', component : AddDepartmentComponent},
            { path : "admin-leave", component : AdminLeaveComponent},
            { path : "job", component : DesignationComponent },
            { path : "admin", component : AdminDashboardComponent}
        ]
    },
    
];
