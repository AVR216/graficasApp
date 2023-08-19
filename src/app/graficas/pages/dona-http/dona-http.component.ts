import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabel: Label[] = [
   // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ]

  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100]
  ]

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#1BFA67', '#B600E0', '#FF3A30', '#070BF5']
    }
  ]

  constructor( private grafService: GraficasService ) { }

  ngOnInit(): void {
    /* this.grafService.getUsuariosRedesSociales()
          .subscribe( data => {
            console.log( data )
            const labels = Object.keys( data );
            const values = Object.values( data );
            this.doughnutChartLabel = labels;
            this.doughnutChartData.push( values );
          }) */
    this.grafService.getData()
      .subscribe( ({labels, values}) => {
          this.doughnutChartLabel = labels;
          this.doughnutChartData.push( values );
      });
  }
}
