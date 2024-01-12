import { Component } from '@angular/core';
import {ServersService} from './servers.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    servers:any
  constructor(private server:ServersService,private router:Router,private active:ActivatedRoute){
    this.servers = server.getServers();
  }

  onClickHandler(){
   this.router.navigate(['users']);
  }

}
