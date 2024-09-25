import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DepartmentService } from '../../../services/department/department.service';
import { apiUrl } from '../../../constants';
import { DynamicHeaderComponent } from "../../../components/dynamic-header/dynamic-header.component";
import { CustomModalComponent } from "./custom-modal/custom-modal.component";

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, FormsModule, DynamicHeaderComponent, CustomModalComponent],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.scss',
})

export class AddDepartmentComponent implements OnInit {
  deptName = '';       
  departments: any[] = []; 
  visible: boolean = false; 
  isEditMode: boolean = false; 
  editDeptId: number | null = null; 

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartment(); 
  }

  // Open the modal for adding a new department
  showAddDialog() {
    this.isEditMode = false; 
    this.deptName = '';      
    this.visible = true;     
  }

  // Open the modal for editing a department
  showEditDialog(department: any) {
    this.isEditMode = true;  
    this.deptName = department.name;  
    this.editDeptId = department._id; 
    this.visible = true;     
  }

  // Close the modal
  closeDialog() {
    this.visible = false;
  }

  
  saveChanges(form: NgForm) {
    if (form.valid) {
      if (this.isEditMode && this.editDeptId) {
        this.departmentService.updateDepartment(this.editDeptId, this.deptName, apiUrl.department.update).subscribe(
          (response) => {
            console.log('Department updated successfully', response);
            this.getDepartment();
            this.closeDialog();
          },
          (error) => {
            console.log('Error updating department', error);
          }
        );
      } else {
        this.departmentService.createData(this.deptName, apiUrl.department.create).subscribe(
          (response) => {
            console.log('Department created successfully', response);
            this.deptName = '';
            this.getDepartment();
            this.closeDialog();
          },
          (error) => {
            console.log('Something went wrong', error);
          }
        );
      }
    }
  }

  // Fetch all departments
  getDepartment() {
    this.departmentService.getData(apiUrl.department.get).subscribe((data: any) => {
      this.departments = data.department;
      console.log(this.departments);
    });
  }

  // Delete department
  deleteDepartment(id: any) {
    this.departmentService.deleteDepartment(id, apiUrl.department.delete).subscribe(() => {
      this.getDepartment();
    });
  }
}