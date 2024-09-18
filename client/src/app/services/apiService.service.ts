import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  
  createData<T>(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/api/auth/${endpoint}`, data);
  }

  
  getData<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/api/auth/${endpoint}`);
  }

  
  deleteData(endpoint: string, id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/api/auth/${endpoint}/${id}`);
  }

  
  updateData<T>(endpoint: string, id: number, data: T): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}/api/auth/${endpoint}/${id}`, data);
  }
}
