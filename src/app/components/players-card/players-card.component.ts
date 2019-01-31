import { Component, OnInit, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import {FavoritePlayerService} from '../../favorite-player.service';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrls: ['./players-card.component.scss']
})
export class PlayersCardComponent {
  @Input() player;

  public defaultAvatar = '../../../assets/image/empty.jpg';

  constructor(private favoritePlayerService: FavoritePlayerService) { }

  public addToFavorite(player): void {
    this.favoritePlayerService.addPlayerCard(player);
  }

  public onError(): void {
    this.player.img = this.defaultAvatar;
  }

}
