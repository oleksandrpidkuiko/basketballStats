import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home/home.component';
import {LineUpListComponent} from './components/line-up-list/line-up-list.component';
import {PlayerInfoComponent} from './components/player-info/player-info.component';
import {FavoriteTeamCardComponent} from './components/favorite-team-card/favorite-team-card.component';
import {FavoritePlayerCardComponent} from './components/favorite-player-card/favorite-player-card.component';

const routes: Routes = [
  { path: 'player-info/:player', component: PlayerInfoComponent },
  { path: 'line-up/:team', component: LineUpListComponent },
  { path: 'favorite-teams', component: FavoriteTeamCardComponent },
  { path: 'favorite-players', component: FavoritePlayerCardComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
