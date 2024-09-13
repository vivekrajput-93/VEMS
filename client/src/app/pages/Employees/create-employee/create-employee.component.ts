import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DepartmentService } from '../../../services/department/department.service';
import { Employee } from '../../../models/auth';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent {

  @ViewChild('employeeForm') employeeForm!: NgForm; // Get reference to the form

  constructor(private departmentService : DepartmentService, private employeeService : EmployeeService) {}

  isDialog : boolean = false;
  departments : any[] = []


  showDialog() {
    this.isDialog = true;
  }

  closeDialog() {
    this.isDialog = false;
    this.clearForm(); 
  }

  clearForm() {
    if (this.employeeForm) {
      this.employeeForm.reset(); 
    }
  }

  firstName = "";
  lastName = "";
  email = "";
  phone = 0;
  status = "";
  departmentId = "";
  position = "";
  hiredDate = 0;

  employees : any[] = []


  //////////////////   fetching department name /////////////////////////

  getDepartment() {
    this.departmentService.getDepartment().subscribe((data : any) => {
      this.departments = data.department;
      console.log(this.departments)
    })
  }

  ngOnInit() : void {
    this.getDepartment();
    this.getEmployee();
  }


  createEmp() {
    const employee: Employee = {
      firstName: this.firstName,
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
      },
      error: (err: any) => {
        console.log('There is an error in registration', err);
      }
    });
    setTimeout(() => {
      this.getEmployee();
    }, 100)

    this.closeDialog();
  }


  getEmployee() {
    this.employeeService.getEmployee().subscribe((data: any) => {
      this.employees = data.employee.map((emp: any) => {
        const department = this.departments.find(dept => dept._id === emp.departmentId);
        return {
          ...emp,
          departmentName: department ? department.name : 'Unknown' 
        };
      });
    });
  }



}
