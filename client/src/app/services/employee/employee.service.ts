import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../models/auth';
import { environment } from '../../../environments/environment';
import { ApiService } from '../apiService.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private apiService: ApiService, ) { }

  createData(employee: Employee, url: string) {
    return this.apiService.createData<Employee>(url, employee);
  }

  getData(url:string) {
    return this.apiService.getData<Employee[]>(url);
  }

  deleteData(id: number, url:string) {
    return this.apiService.deleteData(url, id);
  }

  updateData(id: number, employee: Employee, url:string) {
    return this.apiService.updateData<Employee>(url, id, employee);
  }
  
}
