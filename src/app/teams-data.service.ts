import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {TEAMS_URL} from './mocks/api_urls';


@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {
  teamsList = [];
  buf;

  constructor(private httpClient: HttpClient) { }

  getTeams() {
    this.showLoader();
    return this.httpClient.get(TEAMS_URL.teamsUrl)
      .pipe(
        map(data => {
          this.buf = data;
          this.buf.map( (acronym, index) => {
            this.teamsList.push(
              {
                acronym,
                name: TEAMS_URL.teamsNames[index],
                img: TEAMS_URL.teamsImages[index]
              });
          });
          return this.teamsList;
        }));
  }
  showLoader (): void {
    console.log ('Показать загрузчик');
  }
  hideLoader (): void {
    console.log('Cкрыть загрузчик');
  }
}
