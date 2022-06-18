import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id:number=0;
  productName="Chair"
  constructor(private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(p=>{
      this.id=p["id"];
      console.log(p["id"]);
    });
   }

  ngOnInit(): void {
  }

}
