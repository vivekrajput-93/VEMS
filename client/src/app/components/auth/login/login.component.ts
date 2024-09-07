import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   userEmail : string = '';
   userPassword : string = '';


   constructor(private authService : AuthService, private router : Router) {}


   ///////////////////////////////    login Function ///////////////////////////

   onLogin() {
    this.authService.login(this.userEmail, this.userPassword).subscribe({
      next: (response: any) => {
        console.log("Login successful", response);
        this.router.navigate(['/admin'])
      },
      error: (err: any) => {
        console.log('Error in login', err);
      }
    });
   }


}
