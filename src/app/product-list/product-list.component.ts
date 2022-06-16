import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products=[
    {id:1, name :" product1 ", unitPrice :"1000"},
    {id:2, name :"product2", unitPrice :"2000"},
    {id:3, name :"product3", unitPrice :"3000"}
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
