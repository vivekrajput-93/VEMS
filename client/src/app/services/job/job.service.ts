import { Injectable } from '@angular/core';
import { ApiService } from '../apiService.service';
import { Job } from '../../models/auth';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private apiService : ApiService ) { }


  createData(job : Job, url : string) {
    return this.apiService.createData<Job>(url, job)
  }

  getData(url : string) {
    return this.apiService.getData(url)
  }

  deleteData(id: number, url : string) {
    return this.apiService.deleteData(url, id)
  }


}
