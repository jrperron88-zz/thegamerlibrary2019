import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  public games: Game[];
  constructor(private http: HttpClient) {
    //http.get<Game[]>('https://thegamerlibrarybacklogfunctions.azurewebsites.net/' + 'api/GamesFunction?name=zelda').subscribe(result => {
      http.get<Game[]>('http://localhost:7071/' + 'api/GamesFunction?name=zelda').subscribe(result => {
      this.games = result;
      console.log("retrieved" + this.games);
      console.log("title: " + this.games[0].name);
    }, error => console.error(error));
   }
  }

  interface Game {
    id: number;
    name: string;
  }
