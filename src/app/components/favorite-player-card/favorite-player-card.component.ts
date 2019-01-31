import { Component, OnInit } from '@angular/core';
import {FavoritePlayerService} from '../../favorite-player.service';
import { IPlayer } from '../../player.model';

@Component({
  selector: 'app-favorite-player-card',
  templateUrl: './favorite-player-card.component.html',
  styleUrls: ['./favorite-player-card.component.scss']
})
export class FavoritePlayerCardComponent implements OnInit {
  public favoritePlayerList: IPlayer[];

  constructor(private favoritePlayerService: FavoritePlayerService) { }

  ngOnInit() {
    this.favoritePlayerList = this.favoritePlayerService.getPlayerCards();
  }

}
