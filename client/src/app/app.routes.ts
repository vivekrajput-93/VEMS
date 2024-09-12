import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/auth/login/login.component';
import { RegisterComponent } from '../app/components/auth/register/register.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';
import { CreateEmployeeComponent } from './pages/Employees/create-employee/create-employee.component';
import { EditEmployeeComponent } from './pages/Employees/edit-employee/edit-employee.component';
import { AddDepartmentComponent } from './pages/Department/add-department/add-department.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'create-emp', component: CreateEmployeeComponent },
            { path: 'edit-emp', component: EditEmployeeComponent },
            { path : 'add-dept', component : AddDepartmentComponent}
            
        
        ]
    },
    
];
