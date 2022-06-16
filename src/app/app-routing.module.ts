import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from'./product-list/product-list.component';
import {PageNotFoundComponent} from'./page-not-found/page-not-found.component';

const routes: Routes = [
  // {path:'', component.AppComponent'},
  // {
  //   path: 'products',
  //   children:[
  //     {path:'add', component:AddProductComponent},
  //     {path:'list',component:ProductListComponent},
  //     {path:'edit/:id',component:EditProductComponent}
  //   ]
  // },
  {path:'products', component:ProductListComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
