import {inject} from 'aurelia-framework';
import {UserHelper} from './helpers/userHelper';

@inject(UserHelper)
export class Welcome{
    constructor(user){
        this.user = user;
    }

    activate(){
        console.log(this.user.userId);
    }
}