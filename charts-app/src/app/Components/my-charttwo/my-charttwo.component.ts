import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};


@Component({
  selector: 'app-my-charttwo',
  templateUrl: './my-charttwo.component.html',
  styleUrls: ['./my-charttwo.component.css']
})


export class MyCharttwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myCharttwo", {
      type: 'doughnut',
      data: data,
    });

  }


}


