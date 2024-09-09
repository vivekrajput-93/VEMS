import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/auth';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ToastModule],
  providers : [MessageService],
  templateUrl: './register.component.html',

  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username: string = '';
  userEmail: string = '';
  userPassword: string = '';

  constructor(private authService: AuthService, private router : Router ,  private messageService: MessageService) {}


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
        if(response.success == true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Login Successful',
            detail: 'Welcome to the admin dashboard!'
          });
        }
        this.router.navigate(['/login'])
      },
      error: (err: any) => {
        console.log('There is an error in registration', err);
      }
    });
  }
}
