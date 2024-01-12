import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ServersComponent } from '../servers/servers.component';
import { UsersComponent } from '../users/users.component';
import { RouterModule,Routes } from '@angular/router';



const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent},
  {path:'users',component:UsersComponent}
]

@NgModule({
  declarations: [HomeComponent,ServersComponent,UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[HomeComponent,ServersComponent,UsersComponent,RouterModule]
})
export class RoutingModule { }
