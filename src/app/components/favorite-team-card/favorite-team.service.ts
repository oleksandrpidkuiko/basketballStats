import { Injectable } from '@angular/core';
import { Team } from '../teams-list/team.model';

@Injectable({
  providedIn: 'root'
})

export class FavoriteTeamService {
  public favoriteTeams: Team[] = [];

  constructor() { }

  public addTeamCard(card: Team): void {
    let checkedTeamsCounter = 0;

    if (localStorage.getItem('team-cards')) {
      this.favoriteTeams = JSON.parse(localStorage.getItem('team-cards'));
      this.favoriteTeams.map(({name}) => {

        if (name !== card.name) {
          checkedTeamsCounter++;
        }

        if (checkedTeamsCounter === this.favoriteTeams.length) {
          this.favoriteTeams.push(card);
        }
      });
      localStorage.setItem('team-cards', JSON.stringify(this.favoriteTeams));

    } else {
      this.favoriteTeams.push(card);
      localStorage.setItem('team-cards', JSON.stringify(this.favoriteTeams));
    }
  }

  public getTeamCards(): Team[] {
     const favoriteTeams = JSON.parse(localStorage.getItem('team-cards'));

     return favoriteTeams;
  }
}
