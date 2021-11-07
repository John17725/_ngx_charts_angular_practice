import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common'; //LIBRERIA PARA HORA Y FECHA
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  NombreTrabajador: String = "Jesus";
  ApellidoTrabajador: String = "Gonzalez";
  myDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  HourTime: Date;
  constructor() {

  }

  ngOnInit(){
    timer(0, 1000).subscribe(() => {
      this.HourTime = new Date();
    })
  }

}
