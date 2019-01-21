import { Component, OnInit } from '@angular/core';
import {PlayersDataService} from '../../players-data.service';
import {PageEvent} from '@angular/material';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  playersList;
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  firstCut;
  secondCut;
  activePageData;

  pageEvent: PageEvent;

  constructor(private playersService: PlayersDataService) { }

  ngOnInit() {
    this.playersService.getPlayers().subscribe((data) => {
      this.playersList = data;
      this.playersList.forEach(item => {
        const newData = item.name.split(' ');
        item.img = `https://nba-players.herokuapp.com/players/${newData[1]}/${newData[0]}` ;
        });
      this.length = this.playersList.length;
      this.activePageData = this.playersList.slice(0, this.pageSize);
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  onPageChanged(e) {
    this.firstCut = e.pageIndex * e.pageSize;
    this.secondCut = this.firstCut + e.pageSize;
    this.activePageData = this.playersList.slice(this.firstCut, this.secondCut);
  }
}
