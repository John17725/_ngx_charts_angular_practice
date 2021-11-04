import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';

import { FormsModule } from "@angular/forms";

import { Observable } from 'rxjs';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';
import { ChartComponent } from './Components/chart/chart.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.0.14',
  port: 1883,
  path: '/mqtt'
};
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
