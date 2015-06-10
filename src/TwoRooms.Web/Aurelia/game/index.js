import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';

@inject(HttpClient, Router)
export class Index{
    heading = 'Games';
    games = [];
    url = '/api/games';
    gameName = '';

    constructor(http, router){
        this.http = http;
        this.http = http.configure(x => {
            x.withHeader('Content-Type', 'application/json');
        });
        this.router = router;
    }

    activate(){
        return this.http.get(this.url).then(response => {
            this.games = response.content;
            console.log(this.games);
        });
    }

    createGame(){
        var value = {"Name": `${this.gameName}`, "CurrentPlayers": null, "Leader": null, "Id": null};
        return this.http.post(this.url, value).then(response =>{
            return this.http.get(this.url);
        }).then(response =>{
            this.games = response.content;
            var index = this.games.length;
            while(index-- && this.games[index].Name != this.gameName);
            this.router.navigate('game/'+this.games[index].Id+'/config');
        });
    }
}