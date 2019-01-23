import {Component, Input, OnInit} from '@angular/core';
import {FavoriteTeamService} from '../../favorite-team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() team;

  constructor( private favoriteTeamService: FavoriteTeamService) { }

  ngOnInit() {
  }

  addToFavorite(team) {
    this.favoriteTeamService.addTeamCard(team);
  }

}
