export class DeviceService{

    devices =[
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
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