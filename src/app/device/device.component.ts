import { Component, Input,OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() status: string;
  @Input() indexOfDevice: number;
  @Input() id: number;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    
  }
  getStatus() {
    return this.status;
  }
  getColor(){
    if(this.status==="éteint"){
      return 'red';
    }
    else{
      return 'green';
    }
  }

  onSwitchOn(){
    this.deviceService.swithOn(this.indexOfDevice);
  }
  onSwitchOff(){
    this.deviceService.swithOff(this.indexOfDevice);
  }
}
