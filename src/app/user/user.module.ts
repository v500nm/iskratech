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
import {ButtonModule} from 'primeng/button';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    TeamComponent,
    CountdownComponent,
    CardComponent,
    AboutComponent,
    EventsComponent,
  ],
  imports: [
    CommonModule, 
    UserRoutingModule, 
    SidebarModule,
    ButtonModule
  ],
})
export class UserModule {}
