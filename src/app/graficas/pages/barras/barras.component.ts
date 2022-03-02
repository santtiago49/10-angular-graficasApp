import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  }

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#D94E5A', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#034AA6', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 2  ], label: 'Series C', backgroundColor: '#05DBF2', hoverBackgroundColor: 'red' }
    ]
  };
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[2].data = [
      0, 0, 0, 0, 0, 0, 0,
    ];
    this.chart?.update();
  }

}
