import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dsplayedColumns: string[] = [ 'id','name', 'description', 'productType', 'brand', 'price','stock', 'actions'];
  productDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  productos:any
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.getProduct();
  }
  agregarProduct(): void {
    this.router.navigate(['./create'], {
      relativeTo: this.activatedRoute
    })
  }
  deleteProduct(product: any): void {
    alert('Eliminado persona ' + product.name)
    this.productService.delete(product.id).subscribe(resp=>{
      if(resp===true){
        this.productos.pop(product)
      }
    });
  }
  editarProduct(product: any): any {
    alert('Editando producto ' + product.name)
    this.router.navigate(['./update'], {
      relativeTo: this.activatedRoute
    })
    return product.id;
  }
  getProduct(): void {
    this.productService.getAll().subscribe(listProduct => {
      this.productDataSource.data = listProduct;
    })
  }
}
