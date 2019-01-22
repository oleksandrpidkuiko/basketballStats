import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_RLS} from './mocks/api_urls';

export interface IPlayer {
  assists_per_game: string;
  blocks_per_game: string;
  defensive_rebounds_per_game: string;
  field_goal_percentage: string;
  field_goals_attempted_per_game: string;
  field_goals_made_per_game: string;
  free_throw_percentage: string;
  games_played: string;
  img: string;
  minutes_per_game: string;
  name: string;
  offensive_rebounds_per_game: string;
  player_efficiency_rating: string;
  points_per_game: string;
  rebounds_per_game: string;
  steals_per_game: string;
  team_acronym: string;
  team_name: string;
  three_point_attempted_per_game: string;
  three_point_made_per_game: string;
  three_point_percentage: string;
  turnovers_per_game: string;
}

@Injectable()

export class PlayersDataService {
  players: IPlayer[];

  constructor(private httpClient: HttpClient) {
  }

  public getPlayers(): Observable<any> {
    return this.httpClient.get(API_RLS.playerStatsUrl)
      .pipe(
        map((data: IPlayer[]) => {
          this.players = data;
          this.players.map(player => {
            const newData = player.name.split(' ');
            player.img = `https://nba-players.herokuapp.com/players/${newData[1]}/${newData[0]}`;
          });
          return this.players;
        }));
  }

  getPlayersOfOneTeam(teamName): Observable<any> {
    return this.httpClient.get(`${API_RLS.playersStatsTeams}/${teamName}`);
  }

  getPlayer(playerName): Observable<any> {
    const newName = playerName.split(' ');
    return this.httpClient.get(`${API_RLS.playerStatsUrl}/${newName[1]}/${newName[0]}`);
  }
}
