import { Component, OnInit } from '@angular/core';
import {PlayersDataService} from '../../players-data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-line-up-list',
  templateUrl: './line-up-list.component.html',
  styleUrls: ['./line-up-list.component.scss']
})
export class LineUpListComponent implements OnInit {
  lineUp = [];
  team$;

  constructor(private playerService: PlayersDataService,
              private route: ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit() {
    this.team$ = this.route.paramMap
      .pipe(
      switchMap((params: ParamMap) =>
        this.playerService.getPlayersOfOneTeam(params.get('team'))))
      .subscribe((data) => {
        this.lineUp = data;
        this.lineUp.forEach(item => {
          const newData = item.name.split(' ');
          item.img = `https://nba-players.herokuapp.com/players/${newData[1]}/${newData[0]}` ;
        });
      });
  }
    /*this.playerService.getPlayersOfOneTeam('cle')
      .subscribe((data) => {
        this.lineUp = data;
        this.lineUp.forEach(item => {
          const newData = item.name.split(' ');
          item.img = `https://nba-players.herokuapp.com/players/${newData[1]}/${newData[0]}` ;
        });
      });*/

}
