import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesService } from './games.service';
import { Game } from './game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  public games: Game[];
  constructor(private http: HttpClient, private gamesService: GamesService) {
    //http.get<Game[]>('https://thegamerlibrarybacklogfunctions.azurewebsites.net/' + 'api/GamesFunction?name=zelda').subscribe(result => {
      //http.get<Game[]>('http://localhost:7071/' + 'api/GamesFunction?name=zelda').subscribe(result => {
    //   this.games = this.getGameByName();
    //   console.log("retrieved" + this.games);
    //   console.log("title: " + this.games[0].name);
    // }, error => console.error(error));
    this.getGameByName('mario');
   }
   getGameByName(name: string)
   {
     this.gamesService.getGameByName(name).subscribe(res => {
        this.games = res;
     })
   }
  }


