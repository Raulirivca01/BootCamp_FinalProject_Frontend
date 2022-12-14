import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {

  formProduct: FormGroup;
  productTypes: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { 
    this.formProduct = formBuilder.group({
      name: [{value: null, disabled: false}, [Validators.required]],
      description: [{value: null, disabled: false}, [Validators.required]],
      brand: [{value: null, disabled: false}, [Validators.required]],
      productTypeId: [{value: null, disabled: false}, [Validators.required]],
      price: [{value: null, disabled: false}, [Validators.required]],
      stock: [{value: null, disabled: false}, [Validators.required]],
    }) 
  }

  ngOnInit(): void {
    this.productService.getTypeProduct().subscribe(productTypes => {
      this.productTypes = productTypes;
  })
  }
  cancelar(): void {
    this.back();
  }

  back(): void {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRouter
     })
  }

  guardar(): void {
    const product = this.formProduct.getRawValue();
    this.productService.create(product).subscribe(x => {
      alert('Se creo correctamente');
      this.back();
    })
  }


}
