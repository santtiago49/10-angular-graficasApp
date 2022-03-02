import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public colors: Color[] = [
    '#8ecae6',
    '#219ebc',
    '#023047',
    '#ffb703',
    '#fb8500'
  ]

  public hoverColors: Color[] = [
    '#6A91F7', 
    '#6A9AF7', 
    '#6A90F7'
  ]
   

  public doughnutChartLabels: string[] = [ 
    'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
    { 
      data: [ 350, 450, 100, 94],
      backgroundColor: this.colors,
      hoverBackgroundColor: this.hoverColors
    }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }


}
