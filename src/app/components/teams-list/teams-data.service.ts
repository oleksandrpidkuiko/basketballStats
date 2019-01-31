import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TEAMS_URL} from '../../mocks/api_urls';


@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getTeams() {
    return this.httpClient.get(TEAMS_URL.teamsUrl)
      .pipe(
        map( (data: Array<string>) => {

          return data.map((acronym, index) => {

            return {
                acronym,
                name: TEAMS_URL.teamsNames[index],
                img: TEAMS_URL.teamsImages[index]
              };
          });
        }));
  }
}

