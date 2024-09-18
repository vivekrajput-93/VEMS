import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../models/auth';
import { environment } from '../../../environments/environment';
import { ApiService } from '../apiService.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private apiService: ApiService, private http : HttpClient) { }

  createEmployee(employee: Employee,) {
    return this.apiService.createData<Employee>('createEmployee', employee);
  }


  getEmployee() {
    return this.apiService.getData<Employee[]>('get-emp');
  }

  deleteEmployee(id: number) {
    return this.apiService.deleteData('delete-emp', id);
  }

  updateEmployee(id: number, employee: Employee) {
    return this.apiService.updateData<Employee>('update-emp', id, employee);
  }
  
}
