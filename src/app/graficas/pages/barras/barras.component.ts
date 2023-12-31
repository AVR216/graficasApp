import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026']
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets[] = [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#41E0F5', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#E8CD33', hoverBackgroundColor: 'red' },
      { data: [ 8, 33, 50, 60, 98, 12, 48 ], label: 'Series C' , backgroundColor: '#39FF2B', hoverBackgroundColor: 'red'}
    ]

  constructor() { }

  ngOnInit(): void {
  }

  randomize() {
    this.barChartData[0].data = [
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100)
      ];

      this.barChartData[1].data = [
        Math.round(Math.random()*100),
        Math.round(Math.random()*100),
        Math.round(Math.random()*100),
        Math.round(Math.random()*100),
        Math.round(Math.random()*100),
        Math.round(Math.random()*100),
        Math.round(Math.random()*100)
        ];

        this.barChartData[2].data = [
          Math.round(Math.random()*100),
          Math.round(Math.random()*100),
          Math.round(Math.random()*100),
          Math.round(Math.random()*100),
          Math.round(Math.random()*100),
          Math.round(Math.random()*100),
          Math.round(Math.random()*100)
          ];
  }

}
