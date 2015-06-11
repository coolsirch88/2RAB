import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import {UserHelper} from '../helpers/userHelper';

@inject(HttpClient, Router, UserHelper)
export class Index{
    heading = 'Games';
    games = [];
    url = '/api/games';
    gameName = '';

    constructor(http, router, user){
        this.http = http;
        this.http = http.configure(x => {
            x.withHeader('Content-Type', 'application/json');
        });
        this.router = router;
        this.user = user;
    }

    activate(){
        return this.http.get(this.url).then(response => {
            this.games = response.content;
            console.log(this.games);
        });
    }

    createGame(){
        console.log("User Creating Game:" + this.user.userId);
        var value = {"Name": `${this.gameName}`, "CurrentPlayers": null, "Leader": {"Id": `${this.user.userId}`, "Name": "", "Card": null}, "Id": null};
        console.log(value);
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