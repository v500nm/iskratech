import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  visibleSidebar:any;
  activeTab ='user';
  constructor ( private router:Router){}

  home(){
    this.activeTab = '';
    this.router.navigate(['']);
  }
  event(){
    this.activeTab = 'event';
    this.router.navigate(['event']);
  }
  about(){
    this.activeTab = 'about';
    this.router.navigate(['about']);
  }
  team(){
    this.activeTab = 'team';
    this.router.navigate(['team']);
  }
}
