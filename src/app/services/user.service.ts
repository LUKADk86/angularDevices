import {User} from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
    private users:User[] = [
        {
            firstName: "lounis",
            lastName: "izem",
            email: "lounis.86@gmail.com",
            drinkPreference: "eau gazeuse",
            hobbies: ["développement", "sport"]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice())
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }
}