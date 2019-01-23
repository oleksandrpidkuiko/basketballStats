import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSlideToggleModule, MatButtonModule, MatIconRegistry, MatIconModule, MatInputModule, MatCardModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {TeamsListComponent} from './components/teams-list/teams-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TeamsDataService} from './teams-data.service';
import {TeamCardComponent} from './components/team-card/team-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home/home.component';
import {PlayersCardComponent} from './components/players-card/players-card.component';
import {PlayersDataService} from './players-data.service';
import {LineUpListComponent} from './components/line-up-list/line-up-list.component';
import {PlayerInfoComponent} from './components/player-info/player-info.component';
import {PlayersListComponent} from './components/players-list/players-list.component';
import {FavoriteTeamCardComponent} from './components/favorite-team-card/favorite-team-card.component';
import {FavoriteTeamService} from './favorite-team.service';
import { FavoritePlayerCardComponent } from './components/favorite-player-card/favorite-player-card.component';
import {FavoritePlayerService} from './favorite-player.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsListComponent,
    TeamCardComponent,
    HomeComponent,
    PlayersCardComponent,
    LineUpListComponent,
    PlayerInfoComponent,
    PlayersListComponent,
    FavoriteTeamCardComponent,
    FavoritePlayerCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MatIconRegistry,
    TeamsDataService,
    PlayersDataService,
    FavoriteTeamService,
    FavoritePlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
