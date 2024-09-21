import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DepartmentService } from '../../../services/department/department.service';
import { Employee } from '../../../models/auth';
import { EmployeeService } from '../../../services/employee/employee.service';
import { apiUrl } from '../../../constants';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent {

  @ViewChild('employeeForm') employeeForm!: NgForm; 

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


  ////////////////////////////////  edit modal ////////////////////

  editFirstName = "";
  editLastName = "";
  editEmail = "";
  editPhone = 0;
  editStatus = "";
  editDepartmentId = "";
  editPosition = "";
  editHiredDate = 0;



  isOpen = false;

  ngOnInit() : void {
    this.getDepartment();
    this.getEmployee();
  }

  closeEditDilog() {
    this.isOpen= false;
  }


  showEditedDilog(employee : any) {
    this.isOpen = true;
    this.editFirstName = employee.firstName;
    this.editLastName = employee.lastName;
    this.editEmail = employee.email;
    this.editPhone = employee.phone;
    this.editPosition = employee.position;
    this.editHiredDate = employee.hiredDate;
    this.editDepartmentId = employee.departmentId;
    this.editStatus = employee.status;
  }

  


  //////////////////////          Pagination ////////////////////////////

  paginatedEmployees: any[] = [];
  entriesPerPage = 5;
  currentPage = 1;
  totalPages = 1;

  updatePagination() {
    this.totalPages = Math.ceil(this.employees.length / this.entriesPerPage);
    const startIndex = (this.currentPage - 1) * this.entriesPerPage;
    // console.log("start", startIndex)
    const endIndex = startIndex + this.entriesPerPage;
    // console.log("end", endIndex)
    this.paginatedEmployees = this.employees.slice(startIndex, endIndex);
  }



  onEntriesPerPageChange() {
    this.currentPage - 1;
    this.updatePagination()
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination()
    }
  }

  prevPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination()
    }
  }


  //////////////////   fetching department name /////////////////////////

  getDepartment() {
    this.departmentService.getData(apiUrl.department.get).subscribe((data: any) => {
      this.departments = data.department;
      console.log(this.departments);
    });
  }


  /////////////////////       Create the Employeee /////////////////////

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
  
    this.employeeService.createData(employee, apiUrl.employee.create).subscribe({
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


  /////////////////////////////       Fetching all employee /////////////////

  getEmployee() {
    this.employeeService.getData(apiUrl.employee.get).subscribe((data: any) => {
      this.employees = data.employee.map((emp: any) => {
        const department = this.departments.find(dept => dept._id === emp.departmentId);
        return {
          ...emp,
          departmentName: department ? department.name : 'Unknown'
        };
      });
      this.updatePagination();
    });
  }



  //////////////////////////////      Delete the Employee //////////////

  deleteEmployee(id : any) {
    this.employeeService.deleteData(id, apiUrl.employee.delete).subscribe();
    this.getEmployee()
  }


  /////////////////////////         Edit the Employee ///////////////////

  editChanges(id:number, employee : any) {
    const updatedEmployee = {
      firstName: this.editFirstName,
      lastName: this.editLastName,
      email: this.editEmail,
      phone: this.editPhone,
      status: this.editStatus,
      departmentId: this.editDepartmentId,
      position: this.editPosition,
      hiredDate: this.editHiredDate,
    };

    this.employeeService.updateData(id , updatedEmployee, apiUrl.employee.update).subscribe({
      next: (response: any) => {
        console.log('Employee updated successfully', response);
        this.getEmployee(); 
        this.closeEditDilog()
      },
      error: (err: any) => {
        console.log('Error updating employee', err);
      }
    });
    
  }


}
