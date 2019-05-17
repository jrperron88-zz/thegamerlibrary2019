import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public getGameByName(name: string)
  {
      return this.http.get<Game[]>(environment.functionsBase + environment.searchAPI + '?name=' + name);
  }
}
