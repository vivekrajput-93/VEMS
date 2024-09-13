import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../models/auth';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }


  createEmployee(employee : Employee ) {
   return this.http.post(`${environment.apiUrl}/api/auth/createEmployee`, employee)
  }

  getEmployee() {
    return this.http.get(`${environment.apiUrl}/api/auth/get-emp`)
  }

  
}
