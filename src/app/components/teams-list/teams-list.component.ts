import { Component, OnInit } from '@angular/core';
import {TeamsDataService} from '../../teams-data.service';
import {Teams} from '../../teams';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  teamsList;

  constructor(private teamsService: TeamsDataService) { }

  ngOnInit() {
    this.teamsService.getTeams().subscribe((data: Teams) => this.teamsList = data);
  }

}
