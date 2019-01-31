import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TeamsDataService} from '../teams-list/teams-data.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';
import {StatusService} from '../../status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public groupControl: FormGroup;
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
