import { Component, OnInit, Output } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import { Product } from '../../Model/Product';
import { outputAst } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  formProduct: FormGroup;
  productTypes: any[] = [];
  dsplayedColumns: string[] = [ 'id','name', 'description', 'productType', 'brand', 'price','stock', 'actions'];
  productDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  productSelect:Product=new Product;
  productos:any
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.formProduct = formBuilder.group({
      id: [{value:  null, disabled: false}, [Validators.required]],
      name: [{value: null, disabled: false}, [Validators.required]],
      description: [{value: null, disabled: false}, [Validators.required]],
      brand: [{value: null, disabled: false}, [Validators.required]],
      productTypeId: [{value: null, disabled: false}, [Validators.required]],
      price: [{value: null, disabled: false}, [Validators.required]],
      stock: [{value: null, disabled: false}, [Validators.required]],
   })
  }

  ngOnInit(): void {
    this.getProduct();
    this.productService.getTypeProduct().subscribe(productTypes => {
      this.productTypes = productTypes;
    })
  }
  agregarProduct(): void {
    this.router.navigate(['./create'], {
      relativeTo: this.activatedRoute
    })
  }
  deleteProduct(product: any): void {
    alert('Eliminado producto ' + product.name)
    this.productService.delete(product.id).subscribe(resp=>{
      if(resp===true){
        this.productos.pop(product)
      }
    });
  }
  editarProduct(product: any): void {
    this.productSelect=product;
    return product;
  }

  getProduct(): void {
    this.productService.getAll().subscribe(listProduct => {
      this.productDataSource.data = listProduct;
    })
  }

  cancelar(): void {
    this.back();
    this.productSelect =new Product;
  }

  back(): void {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute
    })
  }

  actualizar(): void {
    const product = this.formProduct.getRawValue();
    this.productService.update(product).subscribe(x => {
      alert('Se actualizo correctamente');
      this.back();
      this.productSelect =new Product;
    })
  }
}
