import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone : true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables); 
  }

  ngOnInit(): void {
    this.renderBarChart();
    // this.renderLineChart();
    
  }

  renderBarChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["2006", "2008", "2010", "2012", "2016"],
        datasets: [
          {
            label: "Income",
            data: [45, 25, 80, 20, 40, 20, 35, 25],
            backgroundColor: "#22C55E",
            borderColor: 'transparent',
            borderWidth: 2.5,
            barPercentage: 0.7
          },
          {
            label: "OutCome",
            data: [20, 40, 20, 50, 25, 40, 25, 10],
            backgroundColor: "#262f37",
            borderColor: 'transparent',
            borderWidth: 2.5,
            barPercentage: 0.7
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
