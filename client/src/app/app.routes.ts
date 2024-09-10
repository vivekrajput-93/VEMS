import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/auth/login/login.component';
import { RegisterComponent } from '../app/components/auth/register/register.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';
import { HeaderComponent } from './components/Layouts/header/header.component';
import { DashboardComponent } from './pages/User/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path : '',
        component : LoginComponent
    },
    {
        path : "login",
        component : LoginComponent
    },
    {
        path : "register",
        component : RegisterComponent
    },
    {
        path : 'admin-dashboard',
        component : AdminComponent
    },
    {
        path : 'header',
        component : HeaderComponent
    },
    {
        path : 'user-dashboard',
        component : DashboardComponent
    }
];
