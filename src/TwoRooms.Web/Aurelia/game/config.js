import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';

@inject(HttpClient, Router)
export class Config{
    heading = 'Game Options';
    game = {};
    url = '/api/games/';

    constructor(http, router){
        this.http = http;
        this.http = http.configure(x => {
            x.withHeader('Content-Type', 'application/json');
        });
        this.router = router;
    }

    activate(params){
        console.log(params);
        console.log(this.url + params.id);
        this.heading = this.heading + ' ' + params.id; //test2
        return this.http.get(this.url + params.id).then(response => {
            this.game = response.content;
            console.log(this.game);
            this.heading = 'Options for ' + this.game.Name;
        });
    }

    cancelGame(){
        console.log(this.game.Id);
        return this.http.delete(this.url + this.game.Id).then(response => {
            this.router.navigateToRoute('index');
        });
    }
}