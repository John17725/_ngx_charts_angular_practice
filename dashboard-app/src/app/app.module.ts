import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrafGaugeComponent } from './graf-gauge/graf-gauge.component';
import { GrafLineChartComponent } from './graf-line-chart/graf-line-chart.component';
import { GrafBarChartComponent } from './graf-bar-chart/graf-bar-chart.component';

import { Observable } from 'rxjs';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.0.11',
  port: 1883,
  path: '/mqtt'
};

@NgModule({
  declarations: [
    AppComponent,
    GrafGaugeComponent,
    GrafLineChartComponent,
    GrafBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
