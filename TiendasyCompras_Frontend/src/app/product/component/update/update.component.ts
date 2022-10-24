import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  formProduct: FormGroup;
  productTypes: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
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

  actualizar(): void {
    const product = this.formProduct.getRawValue();
    this.productService.update(product).subscribe(x => {
      alert('Se actualizo correctamente');
      this.back();
    })
  }
}
