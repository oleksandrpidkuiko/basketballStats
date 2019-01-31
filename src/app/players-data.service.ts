import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_RLS } from './mocks/api_urls';
import { IPlayer } from './player.model';

@Injectable({
  providedIn: 'root'
})

export class PlayersDataService {

  constructor(private httpClient: HttpClient) {}

  public getPlayers(): Observable<any> {
    return this.httpClient.get(API_RLS.playerStatsUrl)
      .pipe(
        map((data: IPlayer[]) => {

          return data.map( (player: IPlayer) => {
            const {name, ...remainder} = player;
            const [firstName, lastName] = name.split(' ');

            return {
              name,
              ...remainder,
              img: `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`,
            };
          });
        }));
  }

  public getPlayersOfOneTeam(teamName): Observable<any> {
    return this.httpClient.get(`${API_RLS.playersStatsTeams}/${teamName}`);
  }

  public getPlayer(playerName): Observable<any> {
    const [firstName, lastName] = playerName.split(' ');

    return this.httpClient.get(`${API_RLS.playerStatsUrl}/${lastName}/${firstName}`);
  }

}
