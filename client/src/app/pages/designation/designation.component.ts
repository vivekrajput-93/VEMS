import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job/job.service';
import { Job } from '../../models/auth';
import { apiUrl } from '../../constants';
import { DepartmentService } from '../../services/department/department.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent {

  constructor(private  jobService :  JobService, private departmentService : DepartmentService) {}

  ///////////////////  custom modal Section ///////////////////////

  visible : boolean = false;
  departmentId = "";
  jobName = "";

  departments : any[] = []
  Jobs : any[] = []


  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false
  }


  ////////////////////////   Edit Modal  /////////////////////////////

  isOpen = false;
  editDepartmentId = "";
  editJobName = "";

  showEditDialog() {
    this.isOpen = true;
  }

  closeEditDialog() {
    this.isOpen = false
  }



  ////////////////////////   Fetching the department //////////////////

  getDepartment() {
    this.departmentService.getData(apiUrl.department.get).subscribe((data : any) =>{
      this.departments = data.department;
      console.log(this.departments)
    })
  }




  ////////////////////////  creating a job ///////////////////////////

  createJob() {

    const jobs : Job = {
      departmentId : this.departmentId,
      jobName : this.jobName

    }

    this.jobService.createData(jobs, apiUrl.job.create).subscribe({
      next : (response : any) => {
        console.log("Created the job", response)
      },

      error : (err : any) => {
        console.log(err)
      }
    })
    this.closeDialog();
    this.departmentId = "",
    this.jobName = "",
    setTimeout(() => {
      this.getJob()
    }, 100)
  }


  ////////////////////////   Get job ////////////////////////////////

  


  getJob() {
    this.jobService.getData(apiUrl.job.get).subscribe((data : any) => {
      this.Jobs = data.job.map((flag : any) => {
        const department = this.departments.find(dept => dept._id === flag.departmentId);
        return {
          ...flag,
          departmentName : department ? department.name : "No Department"
        };
      })
      // console.log(this.Jobs)
    })
  }

  ////////////////////////////   Delete Jobs ////////////////////////////

  deleteJobs(id: number) {
    this.jobService.deleteData(id, apiUrl.job.delete).subscribe();
    this.getJob();
  }

    ngOnInit() {
      this.getDepartment();
      this.getJob();
    }
}
