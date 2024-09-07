import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/auth';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  /////////////////////   Register service ///////////////////////////

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/api/auth/register`, user);
  }

  ///////////////////////    Login Service /////////////////////////

  private userSubject: BehaviorSubject<any | null>;
  public user: Observable<any | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User | null>(
      JSON.parse(localStorage.getItem('auth') || 'null')
    );
    this.user = this.userSubject.asObservable();
  }


  public get userValue(): any | null {
    return this.userSubject?.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(`${environment.apiUrl}/api/auth/login`, { email, password })
      .pipe(
        map((user) => {
          localStorage.setItem('auth', JSON.stringify(user));
          this.userSubject.next(user);
          console.log(this.userValue?.user);
          return user;
        })
      );
  }

  ///////////////////////////////////////     Login ends here /////////////////////////

}
