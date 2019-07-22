import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  userdata:object;
  constructor(private dataserv:DataService) { }

  ngOnInit() {
    this.dataserv.getUserdata().subscribe(data=>{
        this.userdata=data
        console.log(this.userdata)
      })
  }

}
