import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products=[
    {id:1, name:"Chair", UnitPrice:"20"},
    {id:2, name:"Bed", UnitPrice:"250"},
    {id:3, name:"Laptop", UnitPrice:"1700"},
    {id:4, name:"Monitor", UnitPrice:"500"},
    {id:5, name:"Headphone", UnitPrice:"150"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
