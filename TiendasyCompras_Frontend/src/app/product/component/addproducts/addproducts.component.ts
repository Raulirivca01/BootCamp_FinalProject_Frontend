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
      lastname: [{value: null, disabled: false}, [Validators.required]],
      documentNumber: [{value: null, disabled: false}, [Validators.required]],
      documentTypeId: [{value: null, disabled: false}, [Validators.required]],
      birthday: [{value: null, disabled: false}, []],
    }) 
  }

  ngOnInit(): void {
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
