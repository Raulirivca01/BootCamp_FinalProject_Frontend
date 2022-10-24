import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _refresh$=new Subject<void>();
  constructor(private httpclient: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getAll(): Observable<any> {
    return this.httpclient.get(`${environment.apiUrl}/product`);
  }

  create(product: any): Observable<any> {
    return this.httpclient.post(`${environment.apiUrl}/product`, product);
  }

  update(product: any): Observable<any> {
    return this.httpclient.put(`${environment.apiUrl}/product`, product);
  }

  delete(idProduct: any): Observable<any> {
    return this.httpclient.delete(`${environment.apiUrl}/product/${idProduct}`,);
  }

  getTypeProduct(): Observable<any> {
    return this.httpclient.get(`${environment.apiUrl}/productType`);
  }
}
