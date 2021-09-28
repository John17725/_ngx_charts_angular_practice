import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graf-bar-chart',
  templateUrl: './graf-bar-chart.component.html',
  styleUrls: ['./graf-bar-chart.component.css']
})
export class GrafBarChartComponent {
  single = [
    {
      "name": "1s",
      "value": 89
    },
    {
      "name": "2s",
      "value": 90
    },
    {
      "name": "3s",
      "value": 35
    },
    {
      "name": "4s",
      "value": 20
    },
    {
      "name": "5s",
      "value": 72
    }
  ];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  xAxis: boolean = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Seconds';
  showYAxisLabel = true;
  yAxisLabel = 'USAGE';

  constructor() {
    // Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }
}
