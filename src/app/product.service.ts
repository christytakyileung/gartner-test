import {environment} from '../environments/environment'
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Product} from './product';


const httpOptions = {
    headers: new HttpHeaders({
        'Authorization': `Bearer ${environment.gartnerToken}`
    })
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get(environment.gartnerUrl + '/Products', httpOptions);
    }

    addProduct(product) {
        return this.http.post(environment.gartnerUrl + '/Products', product, httpOptions);
    }

    getIndiividualProduct(id) {
        return this.http.get(environment.gartnerUrl + '/Products/' + id, httpOptions);
    }

    updateProduct(product) {
        return this.http.put(environment.gartnerUrl + '/Products/' + product.ProductId, product, httpOptions);
    }


}
