import { Component, OnInit, Input } from '@angular/core';
import {PlayersDataService} from '../../players-data.service';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrls: ['./players-card.component.scss']
})
export class PlayersCardComponent implements OnInit {
  @Input() player;

  defaultAvatar = '../../../assets/image/empty.jpg';

  constructor() { }

  ngOnInit() {
  }

  onError() {
    this.player.img = this.defaultAvatar;
  }

}
