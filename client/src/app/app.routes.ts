import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/auth/login/login.component';
import { RegisterComponent } from '../app/components/auth/register/register.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';

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
        path : 'admin',
        component : AdminComponent
    }
];
