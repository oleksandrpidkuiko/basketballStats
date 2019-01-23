import { Component, OnInit } from '@angular/core';
import {FavoriteTeamService} from '../../favorite-team.service';

@Component({
  selector: 'app-favorite-team-card',
  templateUrl: './favorite-team-card.component.html',
  styleUrls: ['./favorite-team-card.component.scss']
})
export class FavoriteTeamCardComponent implements OnInit {
  favoriteTeamList = [];

  constructor(private  favoriteTeamService: FavoriteTeamService) { }

  ngOnInit() {
    this.favoriteTeamList = this.favoriteTeamService.getTeamCards();
  }
}
