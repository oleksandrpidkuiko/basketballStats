import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritePlayerService {
  data = [];
  constructor() { }

  addPlayerCard(card) {
    let countElemOfData = 0;
    if (localStorage.getItem('player-cards')) {
      this.data = JSON.parse(localStorage.getItem('player-cards'));
      this.data.map((item) => {

        if (item.name !== card.name) {
          countElemOfData++;
        }
        if (countElemOfData === this.data.length) {
          this.data.push(card);
        }
      });
      localStorage.setItem('player-cards', JSON.stringify(this.data));

    } else {
      this.data.push(card);
      localStorage.setItem('player-cards', JSON.stringify(this.data));
    }
  }

  getPlayerCards() {
    const data = JSON.parse(localStorage.getItem('player-cards'));
    return data;
  }
}
