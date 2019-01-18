import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {
  toggleStatus$ = new BehaviorSubject<boolean>(true);
  teamsUrl = 'https://nba-players.herokuapp.com/teams';

  constructor(private httpClient: HttpClient) { }

  getTeams(): Observable<any> {
    return this.httpClient.get(this.teamsUrl);
  }
}
