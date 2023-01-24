import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { CountdownComponent } from './components/countdown/countdown.component';

import { SidebarModule } from 'primeng/sidebar';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';

import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { EventnameComponent } from './components/eventname/eventname.component';
import { DatesComponent } from './components/dates/dates.component';
import { PartbtnComponent } from './components/partbtn/partbtn.component';
import { CardComponent } from './components/card/card.component';
import { AboutcompComponent } from './components/aboutcomp/aboutcomp.component';
import { StreamComponent } from './pages/stream/stream.component';
import { TopicsComponent } from './components/topics/topics.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    TeamComponent,
    CountdownComponent,
    AboutComponent,
    EventsComponent,  
    EventnameComponent,
    DatesComponent,
    PartbtnComponent,
    CardComponent,
    AboutcompComponent,
    StreamComponent,
    TopicsComponent
  ],
  imports: [
    CommonModule, 
    UserRoutingModule, 
    SidebarModule,
    ButtonModule,
    TabViewModule,
    FormsModule
  ],
})
export class UserModule {}
