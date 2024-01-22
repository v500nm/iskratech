import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { BdayComponent } from './user/bday/bday.component';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'hbdAnna',component:BdayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
