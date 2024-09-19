import { Component } from '@angular/core';
import { LeaveService } from '../../../services/leave/leave.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms';
import { EmployeeService } from '../../../services/employee/employee.service';
import { apiUrl } from '../../../constants';
import { Leave } from '../../../models/auth';


@Component({
  selector: 'app-admin-leave',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-leave.component.html',
  styleUrl: './admin-leave.component.scss'
})
export class AdminLeaveComponent {

constructor(private leaveService : LeaveService, private employeeService : EmployeeService) {}

 visible : boolean = false;

 EmployeeId = "";
 leaveType = "";
 from = 0;
 to = 0;
 status = "";
 noOfDays = 0;
 reason = "";

 employees : any[] = []
 leaves : any[] = []


 showDialog() {
  this.visible = true;
}

closeDialog() {
  this.visible = false;
}


////////////////////   fetching all the employee

getEmployee() {
  this.employeeService.getData(apiUrl.employee.get).subscribe((data : any) => {
    this.employees = data.employee;
    // console.log(this.employees)
  })
}


createLeave() {
  const leave: Leave = {
    employeeId: this.EmployeeId,
    leaveType: this.leaveType,
    from: this.from,
    to: this.to,
    noOfDays: this.noOfDays,
    reason: this.reason,
    status: this.status
  };

  this.leaveService.createData(leave, apiUrl.leave.create).subscribe({
    next: (response: any) => {
      console.log("Leave", response);
    },
    error: (error: any) => {
      console.log(error);
    }
  });
  this.closeDialog()
}


getLeave() {
  this.leaveService.getData(apiUrl.leave.get).subscribe((data : any) => {
    this.leaves = data.leave.map((leave : any) => {
      const employee = this.employees.find(emp => emp._id === leave.employeeId);
      return {
        ...leave,
        employeeName : employee ? `${employee.firstName} ${employee.lastName}` : "No Employee"
      };
    })
  })
}

 ngOnInit() {
  this.getEmployee();
  this.getLeave()
 }

   

}
