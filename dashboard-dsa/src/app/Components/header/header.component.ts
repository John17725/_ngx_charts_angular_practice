import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  private subscription: Subscription;
  public message: any;

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('mqtt/demo').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      console.log("Mensaje del broker:",this.message);
    });
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 2, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
