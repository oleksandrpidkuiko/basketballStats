  import { Injectable } from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import {Observable} from 'rxjs';
  import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersDataService {
  baseUrl = 'https://nba-players.herokuapp.com';
  playerStatsUrl = `${this.baseUrl}/players-stats`;
  playerImagesUrl = `${this.baseUrl}/players`;

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.httpClient.get(this.playerStatsUrl);
  }

  getImagePlayer(imgUrl): Observable<any> {
    return this.httpClient.get(imgUrl);
  }
}
