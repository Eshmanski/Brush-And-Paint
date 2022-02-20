import {Injectable} from "@angular/core";
import {Product} from "../interfaces";
import {HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {}

  getProducts() {
    return this.http.get(environment.DBUrl + '/products.json')
      .pipe(
        map((data: any): Product[] => {
            return Object.keys(data).map((key: keyof any) => {
              return { ...data[key], id: key }
            });
        }),
      )
  }
}
