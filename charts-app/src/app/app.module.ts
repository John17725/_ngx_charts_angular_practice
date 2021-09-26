import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { MyCharttwoComponent } from './Components/my-charttwo/my-charttwo.component';
import { MyChartthreeComponent } from './Components/my-chartthree/my-chartthree.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    MyCharttwoComponent,
    MyChartthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
