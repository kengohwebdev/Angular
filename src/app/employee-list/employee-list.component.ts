import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees=[
    {id:1, name:"Peter", salary:"5000",dept:"IT"},
    {id:2, name:"Mia", salary:"6000",dept:"IT"},
    {id:3, name:"Julia", salary:"3500",dept:"HR"},
    {id:4, name:"Allen", salary:"4500",dept:"HR"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
