import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Index{
    heading = 'Games';
    games = [];
    url = '/api/games';
    gameName = '';

    constructor(http){
        this.http = http;
        this.http = http.configure(x => {
            x.withHeader('Content-Type', 'application/json');
        });
    }

    activate(){
        return this.http.get(this.url).then(response => {
            this.games = response.content;
        });
    }

    createGame(){
        alert(`${this.gameName}!`);
        var value = {"Name": `${this.gameName}`, "CurrentPlayers": null, "Leader": null, "Id": null};
        return this.http.post(this.url, value).then(response =>{
            alert('success');
            this.games.push(this.gameName);
        });
    }
}