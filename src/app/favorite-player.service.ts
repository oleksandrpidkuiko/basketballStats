import { Injectable } from '@angular/core';
import { IPlayer } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritePlayerService {
  public favoritePlayers: IPlayer[] = [];
  constructor() { }

  public addPlayerCard(card): void {
    let checkedPlayersCounter = 0;

    if (localStorage.getItem('player-cards')) {
      this.favoritePlayers = JSON.parse(localStorage.getItem('player-cards'));
      this.favoritePlayers.map(({name}) => {

        if (name !== card.name) {
          checkedPlayersCounter++;
        }
        if (checkedPlayersCounter === this.favoritePlayers.length) {
          this.favoritePlayers.push(card);
        }
      });
      localStorage.setItem('player-cards', JSON.stringify(this.favoritePlayers));

    } else {
      this.favoritePlayers.push(card);
      localStorage.setItem('player-cards', JSON.stringify(this.favoritePlayers));
    }
  }

  public getPlayerCards(): IPlayer[] {
    const player = JSON.parse(localStorage.getItem('player-cards'));

    return player;
  }
}
