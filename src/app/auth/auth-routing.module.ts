import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdloginComponent } from './adlogin/adlogin.component';

const routes: Routes = [
  {path:'',component:AdloginComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
