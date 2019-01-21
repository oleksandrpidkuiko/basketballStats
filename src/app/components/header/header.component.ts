import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TeamsDataService} from '../../teams-data.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';
import {StatusService} from '../../status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  groupControl: FormGroup;
  color = 'warn';
  imgUrl = `https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C64da2b43375fab32e4028b07cc5054b3/projects/D1440de2553f68983ac84ee9b5dafb730/images/Dbb4d09f42c1b0d26a4bef308bdae67b9`;

  private destroy$ = new Subject();

  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
    this.groupControl = new FormGroup({
      'toggle': new FormControl(true)
    });

    this.groupControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.statusService.toggleStatus$.next(status.toggle);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
