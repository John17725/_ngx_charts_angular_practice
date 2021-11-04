import { NgModule ,Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from "ngx-mqtt";



@Component({
  selector: 'app-graf-gauge',
  templateUrl: './graf-gauge.component.html',
  styleUrls: ['./graf-gauge.component.css']
})


export class GrafGaugeComponent implements OnDestroy{
  

  private subscription: Subscription;
  public message: any;
  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('mqtt/demo').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      console.log("Mensaje del broker",this.message)
    });
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 2, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  single = []
  view: [number, number] = [500, 400];
  legend: boolean = true;


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
