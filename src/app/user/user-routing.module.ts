import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutComponent } from './pages/about/about.component';
import { StreamComponent } from './pages/stream/stream.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { StartComponent } from './pages/start/start.component';
import { FinalComponent } from './pages/final/final.component';
import { LoseComponent } from './pages/lose/lose.component';
import { BdayComponent } from './pages/bday/bday.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'team', component:TeamComponent},
  {path:'event', component:EventsComponent},
  {path:'about', component:AboutComponent},
  {path:'leaderboard', component:LeaderboardComponent},
  {path:'stream', component:StreamComponent},
  {path:'start', component:StartComponent},
  {path:'final',component:FinalComponent},
  {path:'lose',component:LoseComponent},
  {path:'bday',component:BdayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
