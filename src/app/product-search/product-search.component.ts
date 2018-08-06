import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    switchMap
} from 'rxjs/operators';

import { ProductService } from '../product.service';

@Component({
    selector: 'app-product-search',
    templateUrl: './product-search.component.html',
    styleUrls: [ './product-search.component.css' ]
})
export class ProductSearchComponent implements OnInit {
    products$: any;

    private searchTerms = new Subject<string>();

    constructor(private productService: ProductService) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.products$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(term => {
                return this.productService.getProducts().toPromise()
                .then(products => {
                    return products.filter(p => p.Name.toLowerCase().match(term.toLowerCase()));
                })
            });
        );
    }
}
