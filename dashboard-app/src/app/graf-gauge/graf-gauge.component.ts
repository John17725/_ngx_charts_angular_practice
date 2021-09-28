import { Component, NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graf-gauge',
  templateUrl: './graf-gauge.component.html',
  styleUrls: ['./graf-gauge.component.css']
})


export class GrafGaugeComponent{

  single = [
    {
      "name": "Germany",
      "value": 89
    }
  ];
  view: [number, number] = [500, 400];
  legend: boolean = true;


  constructor() {
    // Object.assign(this, { single });
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
