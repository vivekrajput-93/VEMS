import { Component } from '@angular/core';
import { LeaveService } from '../../../services/leave/leave.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-leave',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-leave.component.html',
  styleUrl: './admin-leave.component.scss'
})
export class AdminLeaveComponent {

constructor(private leaveService : LeaveService) {}

 visible : boolean = false;

 leaveName = ""


 showDialog() {
  this.visible = true;
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

closeDialog() {
  this.visible = false;
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}



 createData() {

 }

  //////////////////////  leave creation functiion //////////////////

   


}
