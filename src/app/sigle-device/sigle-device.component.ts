import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sigle-device',
  templateUrl: './sigle-device.component.html',
  styleUrls: ['./sigle-device.component.scss']
})
export class SigleDeviceComponent implements OnInit {
  name:string ="appareil";
  status:string = "status";

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   const id = this.route.snapshot.params['id'];
    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
  }

}
