import {Component, Input, OnInit} from '@angular/core';
import {FavoriteTeamService} from '../favorite-team-card/favorite-team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  @Input() team;

  constructor( private favoriteTeamService: FavoriteTeamService) { }

  public addToFavorite(team): void {
    this.favoriteTeamService.addTeamCard(team);
  }

}
