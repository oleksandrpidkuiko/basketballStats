import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsListComponent} from './components/teams-list/teams-list.component';
import {HomeComponent} from './components/home/home/home.component';

const routes: Routes = [
  { path: 'teams', component: TeamsListComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
