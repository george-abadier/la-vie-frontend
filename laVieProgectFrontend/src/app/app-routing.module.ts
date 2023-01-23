import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componants/login/login.component';
import { SignUpComponent } from './componants/sign-up/sign-up.component';
import { UserlayoutComponent } from './layouts/userlayout/userlayout.component';

const routes: Routes = [
  {path:'',component:UserlayoutComponent, children:[
    {path:'a',component:UserlayoutComponent},
  {path:'s',component:UserlayoutComponent},
  {path:'d',component:UserlayoutComponent},
  {path:'f',component:UserlayoutComponent},
  {path:'signup',component:SignUpComponent},
  {path:'j',component:UserlayoutComponent},
  {path:'k',component:UserlayoutComponent},
  {path:'l',component:UserlayoutComponent},
  {path:'z',component:UserlayoutComponent},
  {path:'x',component:UserlayoutComponent},
  {path:'c',component:UserlayoutComponent},
  {path:'login',component:LoginComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
