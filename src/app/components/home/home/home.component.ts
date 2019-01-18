import { Component, OnInit } from '@angular/core';
import {TeamsDataService} from '../../../teams-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status: boolean;

  constructor(private dataService: TeamsDataService) { }

  ngOnInit() {
    this.dataService.toggleStatus$.subscribe((status) => {
      this.status = status;
      console.log(status);
    });
  }

}
