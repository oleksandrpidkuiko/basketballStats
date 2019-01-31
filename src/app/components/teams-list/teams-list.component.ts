import { Component, OnInit } from '@angular/core';
import {TeamsDataService} from './teams-data.service';
import {finalize} from 'rxjs/internal/operators';
import { Team } from './team.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  public isLoading = false;
  public teamsList: Team[];

  constructor(private teamsService: TeamsDataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.teamsService.getTeams()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((data) => {
      this.teamsList = data;
    });
  }
}
