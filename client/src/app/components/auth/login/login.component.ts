import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // Fix typo: should be "styleUrls"
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ///////////////////////////////    login Function ///////////////////////////
  onLogin() {
    this.authService.login(this.userEmail, this.userPassword).subscribe({
      next: (response: any) => {
        console.log("Login successful", response);
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Welcome to the admin dashboard!'
        });
        
        if (response.success === false) {
          this.messageService.add({
            severity: 'error',
            detail: 'Invalid Password'
          });
          return;
        }
        { this.authService.userValue?.user?.role === 1 ? this.router.navigate(['/admin-dashboard']) : this.router.navigate(['/user-dashboard']);}
      },
      error: (err: any) => {
        console.log('Error in login', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Login Error',
          detail: 'Something went wrong. Please try again.'
        });
      }
    });
  }
}
