import { Component } from '@angular/core';
import {UsersService} from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any;
 constructor(private user:UsersService){
    this.users = user.getUsers();
 }
}
