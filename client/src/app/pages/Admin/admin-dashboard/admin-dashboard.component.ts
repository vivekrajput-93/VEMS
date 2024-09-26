import { Component } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { LineComponent } from "./line/line.component";


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ChartComponent, LineComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {



}
