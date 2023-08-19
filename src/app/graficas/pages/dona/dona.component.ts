import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabel: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']

  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ]

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#1BFA67', '#B600E0', '#FF3A30']
    }
  ]
}
