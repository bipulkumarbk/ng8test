import { Component, OnInit } from '@angular/core';
import { department } from '../Model/department';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  depart: department[] = [
    { Id: 1, departmentName: "IT" },
    { Id: 2, departmentName: "QA" },
    { Id: 3, departmentName: "QRT" }]

    datepicker:Partial<BsDatepickerConfig>;

   

  constructor() { 
    this.datepicker=Object.assign({},{
      containerClass:'theme-dark-blue'
    })
  }

  ngOnInit() {
  }

}
