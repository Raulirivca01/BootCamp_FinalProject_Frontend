import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import { AddproductsComponent } from './component/addproducts/addproducts.component';
const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'create', component: AddproductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
