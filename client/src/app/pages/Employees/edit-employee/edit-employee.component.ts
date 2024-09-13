import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../services/department/department.service';
import { Employee } from '../../../models/auth';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent {

  constructor(private departmentService : DepartmentService, private employeeService : EmployeeService) {}

  isDialog : boolean = false;
  departments : any[] = []


  showDialog() {
    this.isDialog = true;
  }

  closeDialog() {
    this.isDialog = false;
  }

  fisrtName = "";
  lastName = "";
  email = "";
  phone = 0;
  status = "";
  departmentId = "";
  position = "";
  hiredDate = 0;



  //////////////////   fetching department name /////////////////////////

  getDepartment() {
    this.departmentService.getDepartment().subscribe((data : any) => {
      this.departments = data.department;
      console.log(this.departments)
    })
  }

  ngOnInit() : void {
    this.getDepartment();
  }


  createEmp() {
    const employee: Employee = {
      firstName: this.fisrtName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      status: this.status,
      position: this.position,
      hiredDate: this.hiredDate,
      departmentId: this.departmentId
    };
  
    this.employeeService.createEmployee(employee).subscribe({
      next: (response: any) => {
        console.log("User registered successfully", response);
        this.closeDialog()
      },
      error: (err: any) => {
        console.log('There is an error in registration', err);
      }
    });
   
  }




}
