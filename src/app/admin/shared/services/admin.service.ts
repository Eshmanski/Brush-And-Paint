import { Injectable } from '@angular/core';
import {AdminModule} from "../../admin.module";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Product} from "../../../shared/interfaces";
import {environment} from "../../../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class AdminService {

  constructor(
    private http: HttpClient
  ) {}

  createProduct(product: Product): Observable<any> {
    return this.http.post(environment.DBUrl + '/products.json', product)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(err: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError(() => err);
  }
}
