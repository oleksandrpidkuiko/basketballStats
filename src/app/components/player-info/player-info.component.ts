import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayersDataService } from '../../players-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IPlayer } from '../../player.model';
import { Observable, Subject, Subscriber } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit, OnDestroy {
  public player: IPlayer;
  public destroy$: Subject<any> = new Subject();

  constructor(private playerService: PlayersDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.playerService.getPlayer(params.get('player'))), takeUntil(this.destroy$))
      .subscribe((currentPlayer) => {
        const {name} = currentPlayer;
        const [firstName, lastName] = name.split(' ');

        this.player = currentPlayer;
        this.player.img = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
