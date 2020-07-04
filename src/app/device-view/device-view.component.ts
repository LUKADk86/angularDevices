import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  lastUpdate= new Promise(
    (resolve, reject)=>{
      const date = new Date();
      setTimeout(() => {
        resolve(date)    }, 2000);
    }
  );
  devices: any[];
    isAuth= false;
    constructor(private deviceService: DeviceService){
  
      setTimeout(() => {
        this.isAuth=true
      }, 4000);
    }
  
  ngOnInit(): void {
    this.devices = this.deviceService.devices;
  }
  
    onCheck(){
      this.deviceService.swithOnAll();
    }
  
    onPutOut(){
      this.deviceService.swithOffAll();
    }
    
}
