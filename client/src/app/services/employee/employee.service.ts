import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emplloyee } from '../../models/auth';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }


  getEmployee(employee : Emplloyee ) {}
}
