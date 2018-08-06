import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { ProductListComponent }      from './product-list/product-list.component';
import { ProductSearchComponent }  from './product-search/product-search.component';
import { CategoryListComponent }  from './category-list/category-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductSearchComponent,
        CategoryListComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
