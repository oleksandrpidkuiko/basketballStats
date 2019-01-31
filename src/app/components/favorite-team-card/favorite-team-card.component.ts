import { Component, OnInit } from '@angular/core';
import {FavoriteTeamService} from './favorite-team.service';
import { Team } from '../teams-list/team.model';

@Component({
  selector: 'app-favorite-team-card',
  templateUrl: './favorite-team-card.component.html',
  styleUrls: ['./favorite-team-card.component.scss']
})
export class FavoriteTeamCardComponent implements OnInit {
  public favoriteTeamList: Team[];

  constructor(private  favoriteTeamService: FavoriteTeamService) { }

  ngOnInit() {
    this.favoriteTeamList = this.favoriteTeamService.getTeamCards();
  }
}
