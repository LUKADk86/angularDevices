export class DeviceService{

    devices =[
        {
          id:1,
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
      getDeviceById(id) {
          const device = this.devices.find((deviceObject)=>{
              return deviceObject.id ==id;
          });
          return device;
      }
    swithOnAll(){
        for(let device of this.devices){
            device.status ='allumé';
        }
    }

    swithOffAll(){
        for(let device of this.devices){
            device.status ='éteint';
        }
    }

    swithOn(index: number){
        this.devices[index].status = "allumé";
    }

    swithOff(index: number){
        this.devices[index].status = "éteint";
    }
}