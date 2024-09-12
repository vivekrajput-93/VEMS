import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Department } from '../../models/auth';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  saveDeprtment(name : string)  {
    return this.http.post<Department>(`${environment.apiUrl}/api/auth/create-dept`, {name})

    
  }


  getDepartment() : Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/auth/get-dept`)
  }


  deleteDepartment(id : number) {
    return this.http.delete(`${environment.apiUrl}/api/auth/delete-dept/${id}`)
  }


  updateDepartment(id:number , name : string) {
    return this.http.put(`${environment.apiUrl}/api/auth/update-dept/${id}`, {name})
  }

}
