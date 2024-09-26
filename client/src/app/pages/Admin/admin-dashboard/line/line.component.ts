import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-line',
  standalone: true,
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables); 
  }

  ngOnInit(): void {
    this.renderLineChart();
  }

  renderLineChart() {
    const ctx = document.getElementById('myline') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line', 
      data: {
        labels: ["2006", "2008", "2010", "2012", "2014", "2016"],
        datasets: [
          {
            label: "Total Sales",
            data: [45, 25, 40, 20, 40, 20, 35, 25],
            backgroundColor: "rgba(34, 197, 94, 0.2)", 
            borderColor: "#22C55E", 
            borderWidth: 1.5,
            fill: true, 
            tension: 0.4 
          },
          {
            label: "Total Revenue",
            data: [20, 40, 20, 50, 25, 40, 25, 10],
            backgroundColor: "rgba(38, 47, 55, 0.2)",
            borderColor: "#262f37",
            borderWidth: 1.5,
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 15
            }
          }
        }
      }
    });
  }
}
