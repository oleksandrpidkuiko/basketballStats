import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSlideToggleModule, MatButtonModule, MatIconRegistry, MatIconModule, MatInputModule, MatCardModule, MatMenuModule, MatPaginatorModule
} from '@angular/material';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TeamsDataService} from './teams-data.service';
import { TeamCardComponent } from './components/team-card/team-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayersCardComponent } from './components/players-card/players-card.component';
import {PlayersDataService} from './players-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsListComponent,
    TeamCardComponent,
    HomeComponent,
    PlayersListComponent,
    PlayersCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [MatIconRegistry, TeamsDataService, PlayersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
