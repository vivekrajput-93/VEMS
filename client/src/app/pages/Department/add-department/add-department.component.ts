import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../services/department/department.service';


@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.scss'
})
export class AddDepartmentComponent implements OnInit {

  constructor(private departmentService : DepartmentService) {}

  deptName = ""

  editDeptName = ""

  departments: any[] = [];


  visible: boolean = false;

  isOpen : boolean = false;

  showEditDialog(department: any) {
    this.isOpen = true;
    this.editDeptName = department.name; 
  }

  closeEditDialog() {
    this.isOpen = false;
  }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }




  ngOnInit() : void {
    this.getDepartment();
  }

  saveChanges() {
    this.departmentService.saveDeprtment(this.deptName).subscribe(
      (response) => {
        console.log('Department created successfully', response)
        this.deptName = ""
      },
      (error) => {
        console.log('Something is worng', error)
      }
    );
    setTimeout(() => {
      this.getDepartment();
    }, 100)
    this.closeDialog();
  }


  getDepartment() {
    this.departmentService.getDepartment().subscribe((data : any) => {
      this.departments = data.department;
      console.log(this.departments)
    })
  }


  deleteDepartment(id: any) {
    this.departmentService.deleteDepartment(id).subscribe();
    this.getDepartment();
  }


  editChanges(id: any) {
    this.departmentService.updateDepartment(id, this.editDeptName).subscribe(
      (response) => {
        console.log('Department updated successfully', response);
        this.getDepartment(); 
        this.closeEditDialog();
      },
      (error) => {
        console.log('Error updating department', error);
      }
    );
  }


}