import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './user/pages/events/events.component';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  { path : 'event', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
