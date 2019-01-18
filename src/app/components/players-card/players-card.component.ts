import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrls: ['./players-card.component.scss']
})
export class PlayersCardComponent implements OnInit {
  @Input() player;

  constructor() { }

  ngOnInit() {
  }

}
