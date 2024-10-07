import { Component } from '@angular/core';
import { DynamicHeaderComponent } from "../../components/dynamic-header/dynamic-header.component";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeService } from '../../services/employee/employee.service';
import { apiUrl } from '../../constants';
import { CommonModule } from '@angular/common';
import { FirstletterPipe } from '../../pipes/firstletter.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DynamicHeaderComponent, MatButtonModule, MatTooltipModule, CommonModule, FirstletterPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private employeeService : EmployeeService) {}

  Employees : any[] = [];


  getEmployee() {
    this.employeeService.getData(apiUrl.employee.get).subscribe((data:any) => {
      this.Employees = data.employee;
      console.log(this.Employees);
    })
  }


  ngOnInit() {
    this.getEmployee();
  }

}
