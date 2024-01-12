import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {
  servers:any;
  constructor(private active:ActivatedRoute){
   
  }

  ngOnInit(): void {
     //static approach
      this.servers = {
        id:this.active.snapshot.params['id'],
        name:+this.active.snapshot.params['name']
      };
      //Observable Approach
      this.active.params.subscribe(
        (params:Params) => {
          this.servers.id = +params['id'];
          this.servers.name = params['name'];
        }
      )

  }



}
