import { Subject } from 'rxjs/Subject';

export class DeviceService {

    deviceSubject = new Subject<any[]>();

    private devices = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
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
}