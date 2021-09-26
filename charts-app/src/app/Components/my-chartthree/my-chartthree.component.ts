import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-my-chartthree',
  templateUrl: './my-chartthree.component.html',
  styleUrls: ['./my-chartthree.component.css']
})
export class MyChartthreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
