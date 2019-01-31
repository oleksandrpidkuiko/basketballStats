import { Component, OnDestroy, OnInit } from '@angular/core';
import {PlayersDataService} from '../../players-data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { IPlayer } from '../../player.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-line-up-list',
  templateUrl: './line-up-list.component.html',
  styleUrls: ['./line-up-list.component.scss']
})
export class LineUpListComponent implements OnInit, OnDestroy {
  public lineUp: IPlayer[];
  public destroy$: Subject<any> = new Subject();

  constructor(private playerService: PlayersDataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
      switchMap((params: ParamMap) =>
        this.playerService.getPlayersOfOneTeam(params.get('team'))), takeUntil(this.destroy$))
      .subscribe((playerlist: IPlayer[]) => {
        this.lineUp = playerlist;
        this.lineUp.forEach(player => {
          const {name} = player;
          const [firstName, lastName] = name.split(' ');

          player.img = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}` ;
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
