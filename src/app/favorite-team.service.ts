import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteTeamService {
  data = [];
  constructor() { }

  addTeamCard(card) {
    let buf = 0;
    if (localStorage.getItem('team-cards')) {
      this.data = JSON.parse(localStorage.getItem('team-cards'));
      this.data.map((item) => {

        if (item.name !== card.name) {
          buf++;
        }
        if (buf === this.data.length) {
          console.log('!=');
          this.data.push(card);
        }
      });
      localStorage.setItem('team-cards', JSON.stringify(this.data));

    } else {
      this.data.push(card);
      localStorage.setItem('team-cards', JSON.stringify(this.data));
    }
  }

  getTeamCards() {
     const data = JSON.parse(localStorage.getItem('team-cards'));
     return data;
  }
}
