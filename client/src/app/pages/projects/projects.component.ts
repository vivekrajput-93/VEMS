import { Component } from '@angular/core';
import { DynamicHeaderComponent } from "../../components/dynamic-header/dynamic-header.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DynamicHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
