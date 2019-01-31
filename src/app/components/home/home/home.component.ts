import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../../status.service';
import { of } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public status: boolean;

  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
    this.statusService.toggleStatus$.subscribe((status) => {
      this.status = status;
    });
  }

}
