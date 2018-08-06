import { Component, OnInit } from '@angular/core';

import { Category } from '../category'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.categoryService.get()
    .subscribe(categories => this.categories = categories);
  }
}

