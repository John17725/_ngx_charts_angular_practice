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
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
