import { Injectable } from '@angular/core';
import { ApiService } from '../apiService.service';
import { Leave } from '../../models/auth';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private apiService : ApiService) { }


  createData(data: Leave , url: string) {
    this.apiService.createData(url, data)
  }


  getData(  url: string) {
    return this.apiService.getData(url)
  }
}
