import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ServersComponent } from '../servers/servers.component';
import { UsersComponent } from '../users/users.component';
import { RouterModule,Routes } from '@angular/router';
import { ServerDetailsComponent } from '../server-details/server-details.component';
import { NotFoundComponent } from '../not-found/not-found.component';



const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent},
  {path:'users',component:UsersComponent},
  {path:'servers/:id/:name',component:ServerDetailsComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'not-found'}
]

@NgModule({
  declarations: [HomeComponent,ServersComponent,UsersComponent,ServerDetailsComponent,NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[HomeComponent,ServersComponent,ServerDetailsComponent,UsersComponent,NotFoundComponent,RouterModule]
})
export class RoutingModule { }
