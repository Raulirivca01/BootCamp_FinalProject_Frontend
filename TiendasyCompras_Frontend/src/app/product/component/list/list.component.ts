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
  dsplayedColumns: string[] = [ 'name', 'description', 'productType', 'brand', 'prices','stock', 'actions'];
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
  agregarPerson(): void {
    this.router.navigate(['./create'], {
      relativeTo: this.activatedRoute
    })
  }
  getProduct(): void {
    this.productService.getAll().subscribe(listProduct => {
      this.productDataSource.data = listProduct;
    })
  }
}