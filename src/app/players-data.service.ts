  import { Injectable } from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersDataService {
  playersUrl = `https://nba-players.herokuapp.com/players-stats`;

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.httpClient.get(this.playersUrl);
  }
}
