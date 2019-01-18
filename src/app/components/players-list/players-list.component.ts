import { Component, OnInit } from '@angular/core';
import {PlayersDataService} from '../../players-data.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  playersList;
  constructor(private playersService: PlayersDataService) { }

  ngOnInit() {
    this.playersService.getPlayers().subscribe((data) => this.playersList = data);
  }

}
