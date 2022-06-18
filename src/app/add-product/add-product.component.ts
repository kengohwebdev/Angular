import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product={
    id:0,
    name:'',
    price:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  
  addProduct(){
    console.log(this.product.id+" "+this.product.name+" "+this.product.price)

  }

}
