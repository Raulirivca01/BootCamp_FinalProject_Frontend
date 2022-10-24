import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import { AddproductsComponent } from './component/addproducts/addproducts.component';
import { UpdateComponent } from './component/update/update.component';
const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'create', component: AddproductsComponent},
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
