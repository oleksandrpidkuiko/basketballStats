import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PlayersDataService} from '../../players-data.service';
import {PageEvent} from '@angular/material';
import {finalize, map} from 'rxjs/internal/operators';
import { IPlayer } from '../../player.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  isLoading = false;
  playersList: IPlayer[];
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  firstCut;
  secondCut;
  activePageData;

  pageEvent: PageEvent;

  constructor(private playersService: PlayersDataService) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.playersService.getPlayers()
      .pipe(finalize(() => {
      this.isLoading = false;
    }))
      .subscribe(data => {
        console.log(data);
        this.playersList = data;
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
