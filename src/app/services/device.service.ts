import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class DeviceService {

    constructor(private httpClient: HttpClient){}

    deviceSubject = new Subject<any[]>();

    private devices = [
       
    ];


    emitDeviceSubject() {
        this.deviceSubject.next(this.devices.slice());
    }


    getDeviceById(id) {
        const device = this.devices.find((deviceObject) => {
            return deviceObject.id == id;
        });
        return device;
    }
    addDevice(name:string, status:string){
        const deviceObject= {
            id: 0,
            name: '',
            status:''
        }
        deviceObject.name =name;
        deviceObject.status = status;
        deviceObject.id = this.devices[(this.devices.length-1)].id+1;
        this.devices.push(deviceObject);
        this.emitDeviceSubject();
    }


    swithOnAll() {
        for (let device of this.devices) {
            device.status = 'allumé';
        }
        this.emitDeviceSubject();
    }

    swithOffAll() {
        for (let device of this.devices) {
            device.status = 'éteint';
        }
        this.emitDeviceSubject();
    }

    swithOn(index: number) {
        this.devices[index].status = "allumé";
        this.emitDeviceSubject();
    }

    swithOff(index: number) {
        this.devices[index].status = "éteint";
        this.emitDeviceSubject();
    }
    saveDeviceToServer(){
        this.httpClient.put('https://http-client-9c0a6.firebaseio.com/devices.json',
        this.devices   
        ).subscribe(
            ()=>{
                console.log('réussi');
            },
            (error)=>{
                console.log(error);
            }
        )
    }
    getDevicesfromServer(){
        this.httpClient.get<any[]>('https://http-client-9c0a6.firebaseio.com/devices.json'

        ).subscribe(
            (response)=>{
                this.devices = response;
                this.emitDeviceSubject();
                
            },
            (error)=>{
                console.log(error);
            }
        )
    }
}