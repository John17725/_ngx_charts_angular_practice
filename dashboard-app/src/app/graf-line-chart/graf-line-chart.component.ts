import { OnInit } from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graf-line-chart',
  templateUrl: './graf-line-chart.component.html',
  styleUrls: ['./graf-line-chart.component.css']
})
export class GrafLineChartComponent {
  multi = [
    {
      name: 'Prensa',
      series: [
        {
          name: '1s',
          value: 62,
        },
        {
          name: '2s',
          value: 73,
        },
        {
          name: '3s',
          value: 54,
        },
        {
          name: '4s',
          value: 40,
        },
        {
          name: '5s',
          value: 89,
        },
      ],
    }
  ];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Tiempo';
  yAxisLabel: string = 'PSI';
  timeline: boolean = true;

  constructor() {
    // Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
