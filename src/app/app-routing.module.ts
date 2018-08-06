import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductListComponent }      from './product-list/product-list.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import {CategoryListComponent} from "./category-list/category-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: ProductDetailComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryListComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
