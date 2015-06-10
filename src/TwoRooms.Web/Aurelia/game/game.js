import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Game{
    heading = 'Game';
    game = {};
    url = '/api/games/';

    constructor(http){
        this.http = http;
        this.http = http.configure(x => {
            x.withHeader('Content-Type', 'application/json');
        });
    }

    activate(params){
        console.log(params);
        console.log(this.url + params.id);
        this.heading = this.heading + ' ' + params.id; //test2
        return this.http.get(this.url + params.id).then(response => {
            this.game = response.content;
            console.log(this.game);
            this.heading = this.game.Name;
        });
    }
}