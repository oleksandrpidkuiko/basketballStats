import { Component, OnInit } from '@angular/core';
import {PlayersDataService} from '../../players-data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
  player$;
  player;

  constructor(private playerService: PlayersDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.player$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.playerService.getPlayer(params.get('player'))))
      .subscribe((data) => {
        this.player = data;
        const newName = this.player.name.split(' ');
        this.player.img = `https://nba-players.herokuapp.com/players/${newName[1]}/${newName[0]}` ;
        });
  }

}
