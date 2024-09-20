import { Component } from '@angular/core';
import { LeaveService } from '../../../services/leave/leave.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../../../services/employee/employee.service';
import { apiUrl } from '../../../constants';
import { Leave } from '../../../models/auth';

@Component({
  selector: 'app-admin-leave',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-leave.component.html',
  styleUrl: './admin-leave.component.scss',
})
export class AdminLeaveComponent {
  constructor(
    private leaveService: LeaveService,
    private employeeService: EmployeeService
  ) {}

  visible: boolean = false;

  EmployeeId = '';
  leaveType = '';
  from = 0;
  to = 0;
  status = '';
  noOfDays = 0;
  reason = '';

  searchInput = '';

  employees: any[] = [];
  leaves: any[] = [];
  FilteredData: any[] = [];

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  ///////// ///////////         Pagination ///////////////////////
  
  paginatedEmployees: any[] = [];
  entriesPerPage = 5;
  currentPage = 1;
  totalPages = 1;

  updatePagination() {
    this.totalPages = Math.ceil(this.FilteredData.length / this.entriesPerPage);
    const startIndex = (this.currentPage - 1) * this.entriesPerPage;
    // console.log("start", startIndex)
    const endIndex = startIndex + this.entriesPerPage;
    // console.log("end", endIndex)
    this.paginatedEmployees = this.FilteredData.slice(startIndex, endIndex);
  }

  onEntriesPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  ////////////////////   fetching all the employee ///////////////

  getEmployee() {
    this.employeeService.getData(apiUrl.employee.get).subscribe((data: any) => {
      this.employees = data.employee;
      // console.log(this.employees)
    });
  }

  //////////////////   Creating leave /////////////////////////

  createLeave() {
    const leave: Leave = {
      employeeId: this.EmployeeId,
      leaveType: this.leaveType,
      from: this.from,
      to: this.to,
      noOfDays: this.noOfDays,
      reason: this.reason,
      status: this.status,
    };

    this.leaveService.createData(leave, apiUrl.leave.create).subscribe({
      next: (response: any) => {
        console.log('Leave', response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    setTimeout(() => {
      this.getLeave();
    }, 100);
    this.closeDialog();
  }




///////////////////    Fetching all the leaves /////////////////

  getLeave() {
    this.leaveService.getData(apiUrl.leave.get).subscribe((data: any) => {
      this.leaves = data.leave.map((leave: any) => {
        const employee = this.employees.find(
          (emp) => emp._id === leave.employeeId
        );
        return {
          ...leave,
          employeeName: employee
            ? `${employee.firstName} ${employee.lastName}`
            : 'No Employee',
        };
      });
      this.FilteredData = this.leaves;
      this.updatePagination();
    });
  }


  //////////////////////     Search Filter //////////////////

  searchFilteredData() {
    if (this.searchInput) {
      this.FilteredData = this.leaves.filter((leave) =>
        leave.employeeName
          .toLowerCase()
          .includes(this.searchInput.toLowerCase())
      );
    } else {
      this.FilteredData = this.leaves;
    }
    this.currentPage = 1;
    this.updatePagination();
    this.searchInput = '';
  }

  ngOnInit() {
    this.getEmployee();
    this.getLeave();
  }
}
