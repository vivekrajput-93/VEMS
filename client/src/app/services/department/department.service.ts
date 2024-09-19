import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../models/auth';
import { ApiService } from '../apiService.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private apiService: ApiService) { }

  createData(deptName: any, url: string) {
    return this.apiService.createData<any>(url, {name: deptName});
  }

  getData(url: string): Observable<any> {
    return this.apiService.getData<any>(url);
  }

  deleteDepartment(id: number, url: string) {
    return this.apiService.deleteData(url, id);
  }

  updateDepartment(id: number, deptName: any, url: string) {
    return this.apiService.updateData(url, id, {name : deptName});
  }
}
