import { Component, OnInit } from '@angular/core';
import {StatusService} from '../../../status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status: boolean;

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.toggleStatus$.subscribe((status) => {
      this.status = status;
    });
  }

}
