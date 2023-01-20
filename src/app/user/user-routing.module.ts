import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutComponent } from './pages/about/about.component';
import { StreamComponent } from './pages/stream/stream.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'team', component:TeamComponent},
  {path:'event', component:EventsComponent},
  {path:'about', component:AboutComponent},
  {path:'stream', component:StreamComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
