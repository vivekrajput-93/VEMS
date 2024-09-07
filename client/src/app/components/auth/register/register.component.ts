import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username: string = '';
  userEmail: string = '';
  userPassword: string = '';

  constructor(private authService: AuthService, private router : Router) {}


  ////////////////////////////     Register function /////////////////////////////

  onRegister() {
  
    const user: User = {
      username: this.username,
      email: this.userEmail,
      password: this.userPassword,
    };

    this.authService.register(user).subscribe({
      next: (response: any) => {
        console.log("User registered successfully", response);
        this.router.navigate(['/login'])
      },
      error: (err: any) => {
        console.log('There is an error in registration', err);
      }
    });
  }
}
